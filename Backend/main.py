from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_pymongo import PyMongo
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder='../Frontend/dist', static_url_path='')
CORS(
    app,
    origins="*",
    allow_headers=["Content-Type", "X-Admin-Key"],
    methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"]
)

# ─── Data storage ─────────────────────────────────────────────────────────────
DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
os.makedirs(DATA_DIR, exist_ok=True)

def save_submission(filename, data):
    filepath = os.path.join(DATA_DIR, filename)
    submissions = []
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            try:
                submissions = json.load(f)
            except Exception:
                submissions = []
    submissions.append(data)
    with open(filepath, 'w') as f:
        json.dump(submissions, f, indent=2)

def _read_data(filename):
    filepath = os.path.join(DATA_DIR, filename)
    if not os.path.exists(filepath):
        return jsonify([])
    with open(filepath, 'r') as f:
        return jsonify(json.load(f))

def _check_admin():
    admin_key = os.getenv('ADMIN_KEY', '')
    if admin_key and request.headers.get('X-Admin-Key') != admin_key:
        return False
    return True

# ─── Health check ─────────────────────────────────────────────────────────────
@app.route('/api/health')
def health():
    return jsonify({'status': 'ok', 'timestamp': datetime.utcnow().isoformat()})

# ─── Contact form ─────────────────────────────────────────────────────────────
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json(force=True)
    for field in ['name', 'email', 'message']:
        if not data.get(field):
            return jsonify({'error': f'Missing required field: {field}'}), 400

    submission = {
        'timestamp': datetime.utcnow().isoformat(),
        'name': data.get('name', '').strip(),
        'email': data.get('email', '').strip(),
        'phone': data.get('phone', '').strip(),
        'service': data.get('service', '').strip(),
        'message': data.get('message', '').strip(),
    }
    save_submission('contacts.json', submission)
    
    # FIX: Check if email sent successfully
    email_sent = _send_notification_email(
        subject=f"[Softech] New Contact: {submission['name']}",
        body=f"Name: {submission['name']}\nEmail: {submission['email']}\nPhone: {submission['phone']}\nService: {submission['service']}\n\nMessage:\n{submission['message']}"
    )
    
    if not email_sent:
        return jsonify({'success': False, 'message': 'Data saved, but failed to send email notification.'}), 500
        
    return jsonify({'success': True, 'message': 'Thank you! We will be in touch within 24 hours.'}), 200

# ─── Quote request ────────────────────────────────────────────────────────────
@app.route('/api/quote', methods=['POST'])
def quote():
    data = request.get_json(force=True)
    for field in ['name', 'email']:
        if not data.get(field):
            return jsonify({'error': f'Missing required field: {field}'}), 400

    submission = {
        'timestamp': datetime.utcnow().isoformat(),
        'name': data.get('name', '').strip(),
        'email': data.get('email', '').strip(),
        'phone': data.get('phone', '').strip(),
        'company': data.get('company', '').strip(),
        'service': data.get('service', '').strip(),
        'budget': data.get('budget', '').strip(),
        'timeline': data.get('timeline', '').strip(),
        'description': data.get('description', '').strip(),
    }
    save_submission('quotes.json', submission)
    
    # FIX: Check if email sent successfully
    email_sent = _send_notification_email(
        subject=f"[Softech] New Quote: {submission['name']} – {submission['service']}",
        body=f"Name: {submission['name']}\nCompany: {submission['company']}\nEmail: {submission['email']}\nPhone: {submission['phone']}\nService: {submission['service']}\nBudget: {submission['budget']}\nTimeline: {submission['timeline']}\nDescription:\n {submission['description']}"
    )
    
    if not email_sent:
        return jsonify({'success': False, 'message': 'Data saved, but failed to send email notification.'}), 500
        
    return jsonify({'success': True, 'message': 'Quote request received. Proposal incoming within 24–48 hours.'}), 200

# ─── Newsletter ───────────────────────────────────────────────────────────────
@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json(force=True)
    email = data.get('email', '').strip()
    if not email or '@' not in email:
        return jsonify({'error': 'Valid email required'}), 400
    save_submission('subscribers.json', {'timestamp': datetime.utcnow().isoformat(), 'email': email})
    return jsonify({'success': True, 'message': 'Subscribed successfully!'}), 200

# ─── Admin endpoints ──────────────────────────────────────────────────────────
@app.route('/api/admin/contacts')
def admin_contacts():
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
    return _read_data('contacts.json')

@app.route('/api/admin/quotes')
def admin_quotes():
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
    return _read_data('quotes.json')

# ─── MongoDB Configuration ──────────────────────────────────────────────────
app.config["MONGO_URI"] = os.getenv("MONGO_URI", "mongodb://localhost:27017/softech_db")
mongo = PyMongo(app)

# ─── Blog Endpoints with MongoDB ───────────────────────────────────────────

@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    try:
        blogs_collection = mongo.db.blogs
        posts = list(blogs_collection.find({}, {"_id": 0}))
        if not _check_admin():
            posts = [p for p in posts if p.get('published', True)]
        return jsonify(posts)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/blogs/<slug>', methods=['GET'])
def get_blog(slug):
    try:
        blogs_collection = mongo.db.blogs
        post = blogs_collection.find_one({"slug": slug}, {"_id": 0})
        if not post:
            return jsonify({'error': 'Not found'}), 404
        return jsonify(post)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/blogs', methods=['POST'])
def create_blog():
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
    
    data = request.get_json(force=True)
    for field in ['title', 'slug', 'excerpt', 'content']:
        if not data.get(field):
            return jsonify({'error': f'Missing: {field}'}), 400
            
    post = {
        'id': int(datetime.utcnow().timestamp()),
        'slug': data['slug'].strip(),
        'title': data['title'].strip(),
        'excerpt': data['excerpt'].strip(),
        'content': data['content'],
        'category': data.get('category', 'General'),
        'author': data.get('author', 'Softech Team'),
        'date': data.get('date', datetime.utcnow().strftime('%Y-%m-%d')),
        'readTime': data.get('readTime', '5 min read'),
        'image': data.get('image', ''),
        'featured': data.get('featured', False),
        'published': data.get('published', True),
        'created_at': datetime.utcnow().isoformat(),
    }
    
    mongo.db.blogs.insert_one(post)
    if '_id' in post: del post['_id']
    return jsonify({'success': True, 'post': post}), 201

@app.route('/api/blogs/<slug>', methods=['PUT'])
def update_blog(slug):
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
        
    data = request.get_json(force=True)
    blogs_collection = mongo.db.blogs
    
    existing_post = blogs_collection.find_one({"slug": slug})
    if not existing_post:
        return jsonify({'error': 'Post not found'}), 404

    updated_fields = {
        'slug': data.get('slug', existing_post.get('slug')).strip(),
        'title': data.get('title', existing_post.get('title')).strip(),
        'excerpt': data.get('excerpt', existing_post.get('excerpt')).strip(),
        'content': data.get('content', existing_post.get('content')),
        'category': data.get('category', existing_post.get('category')),
        'author': data.get('author', existing_post.get('author')),
        'date': data.get('date', existing_post.get('date')),
        'readTime': data.get('readTime', existing_post.get('readTime')),
        'image': data.get('image', existing_post.get('image')),
        'featured': data.get('featured', existing_post.get('featured', False)),
        'published': data.get('published', existing_post.get('published', True)),
        'updated_at': datetime.utcnow().isoformat()
    }
    
    blogs_collection.update_one({"slug": slug}, {"$set": updated_fields})
    return jsonify({'success': True})

@app.route('/api/blogs/<slug>', methods=['DELETE'])
def delete_blog(slug):
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
    
    result = mongo.db.blogs.delete_one({"slug": slug})
    if result.deleted_count == 0:
        return jsonify({'error': 'Post not found'}), 404
        
    return jsonify({'success': True})

# ─── Email helper (FIXED & IMPROVED) ──────────────────────────────────────────
def _send_notification_email(subject, body):
    smtp_host = os.getenv('SMTP_HOST')
    smtp_user = os.getenv('SMTP_USER')
    smtp_pass = os.getenv('SMTP_PASS')  # Google App Password (16-digits)
    notify_to = os.getenv('NOTIFY_EMAIL')
    
    if not (smtp_host and smtp_user and smtp_pass):
        print("Email configuration missing variables.")
        return False
        
    try:
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = notify_to
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))
        
        # FIX: Using standard standard SMTP + STARTTLS over port 587 (Highly recommended for Gmail)
        with smtplib.SMTP(smtp_host, 587, timeout=10) as server:
            server.starttls()  # Upgrade connection to secure TLS
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, notify_to, msg.as_string())
            
        print("Email sent successfully!")
        return True
    except Exception as e:
        print(f"CRITICAL: Email send failed: {e}")
        return False

# ─── Serve React SPA ──────────────────────────────────────────────────────────
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path.startswith('api/'):
        return jsonify({'error': 'API endpoint not found'}), 404
    dist = app.static_folder
    if path and os.path.exists(os.path.join(dist, path)):
        return send_from_directory(dist, path)
    return send_from_directory(dist, 'index.html')

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_ENV', 'development') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug)
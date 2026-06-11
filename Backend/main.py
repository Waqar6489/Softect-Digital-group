from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
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
        return []
    with open(filepath, 'r') as f:
        try:
            return json.load(f)
        except Exception:
            return []

def _write_data(filename, data):
    filepath = os.path.join(DATA_DIR, filename)
    with open(filepath, 'w') as f:
        json.dump(data, f, indent=2)

def _check_admin():
    admin_key = os.getenv('ADMIN_KEY', '')
    if not admin_key:
        return False
    received_key = request.headers.get('X-Admin-Key', '')
    return received_key == admin_key

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
    return jsonify(_read_data('contacts.json'))

@app.route('/api/admin/quotes')
def admin_quotes():
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
    return jsonify(_read_data('quotes.json'))


# ─── JSON File Based Blog Endpoints (No MongoDB Needed!) ───────────────────

@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    try:
        posts = _read_data('blogs.json')
        # If user is not admin, only show published articles
        if not _check_admin():
            posts = [p for p in posts if p.get('published', True)]
        return jsonify(posts)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/blogs/<slug>', methods=['GET'])
def get_blog(slug):
    try:
        posts = _read_data('blogs.json')
        post = next((p for p in posts if p['slug'] == slug), None)
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
            
    posts = _read_data('blogs.json')
    
    # Check if slug already exists
    if any(p['slug'] == data['slug'].strip() for p in posts):
        return jsonify({'error': 'A blog with this slug already exists'}), 400

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
        'featured': bool(data.get('featured', False)),
        'published': bool(data.get('published', True)),
        'created_at': datetime.utcnow().isoformat(),
    }
    
    posts.append(post)
    _write_data('blogs.json', posts)
    return jsonify({'success': True, 'post': post}), 201

@app.route('/api/blogs/<slug>', methods=['PUT'])
def update_blog(slug):
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
        
    data = request.get_json(force=True)
    posts = _read_data('blogs.json')
    
    post_index = next((i for i, p in enumerate(posts) if p['slug'] == slug), None)
    if post_index is None:
        return jsonify({'error': 'Post not found'}), 404

    existing_post = posts[post_index]

    updated_fields = {
        'id': existing_post.get('id'),
        'slug': data.get('slug', existing_post.get('slug')).strip(),
        'title': data.get('title', existing_post.get('title')).strip(),
        'excerpt': data.get('excerpt', existing_post.get('excerpt')).strip(),
        'content': data.get('content', existing_post.get('content')),
        'category': data.get('category', existing_post.get('category')),
        'author': data.get('author', existing_post.get('author')),
        'date': data.get('date', existing_post.get('date')),
        'readTime': data.get('readTime', existing_post.get('readTime')),
        'image': data.get('image', existing_post.get('image')),
        'featured': data.get('featured') if 'featured' in data else existing_post.get('featured', False),
        'published': data.get('published') if 'published' in data else existing_post.get('published', True),
        'created_at': existing_post.get('created_at'),
        'updated_at': datetime.utcnow().isoformat()
    }
    
    posts[post_index] = updated_fields
    _write_data('blogs.json', posts)
    return jsonify({'success': True})

@app.route('/api/blogs/<slug>', methods=['DELETE'])
def delete_blog(slug):
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
    
    posts = _read_data('blogs.json')
    filtered_posts = [p for p in posts if p['slug'] != slug]
    
    if len(posts) == len(filtered_posts):
        return jsonify({'error': 'Post not found'}), 404
        
    _write_data('blogs.json', filtered_posts)
    return jsonify({'success': True})


# ─── Email helper ─────────────────────────────────────────────────────────────
def _send_notification_email(subject, body):
    smtp_host = os.getenv('SMTP_HOST')
    smtp_user = os.getenv('SMTP_USER')
    smtp_pass = os.getenv('SMTP_PASS')
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
        
        with smtplib.SMTP(smtp_host, 587, timeout=10) as server:
            server.starttls()
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
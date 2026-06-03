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
    _send_notification_email(
        subject=f"[Softech] New Contact: {submission['name']}",
        body=f"Name: {submission['name']}\nEmail: {submission['email']}\nPhone: {submission['phone']}\nService: {submission['service']}\n\nMessage:\n{submission['message']}"
    )
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
    _send_notification_email(
        subject=f"[Softech] New Quote: {submission['name']} – {submission['service']}",
        body=f"Name: {submission['name']}\nEmail: {submission['email']}\nService: {submission['service']}\nBudget: {submission['budget']}\nTimeline: {submission['timeline']}\n\n{submission['description']}"
    )
    return jsonify({'success': True, 'message': 'Quote request received. Proposal incoming within 24–48 hours.'}), 200

# ─── Job application ──────────────────────────────────────────────────────────
@app.route('/api/apply', methods=['POST'])
def apply():
    data = request.get_json(force=True)
    for field in ['name', 'email', 'position']:
        if not data.get(field):
            return jsonify({'error': f'Missing required field: {field}'}), 400

    submission = {
        'timestamp': datetime.utcnow().isoformat(),
        'name': data.get('name', '').strip(),
        'email': data.get('email', '').strip(),
        'phone': data.get('phone', '').strip(),
        'position': data.get('position', '').strip(),
        'linkedin': data.get('linkedin', '').strip(),
        'portfolio': data.get('portfolio', '').strip(),
        'cover': data.get('cover', '').strip(),
    }
    save_submission('applications.json', submission)
    _send_notification_email(
        subject=f"[Softech] Job Application: {submission['position']} – {submission['name']}",
        body=f"Position: {submission['position']}\nName: {submission['name']}\nEmail: {submission['email']}\nLinkedIn: {submission['linkedin']}\n\n{submission['cover']}"
    )
    return jsonify({'success': True, 'message': 'Application received! We will review and get back to you soon.'}), 200

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

@app.route('/api/admin/applications')
def admin_applications():
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
    return _read_data('applications.json')

# ─── Blog endpoints ───────────────────────────────────────────────────────────
@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    filepath = os.path.join(DATA_DIR, 'blogs.json')
    if not os.path.exists(filepath):
        return jsonify([])
    with open(filepath) as f:
        try:
            posts = json.load(f)
        except Exception:
            return jsonify([])
    published = [p for p in posts if p.get('published', True)]
    return jsonify(published)

@app.route('/api/blogs/<slug>', methods=['GET'])
def get_blog(slug):
    filepath = os.path.join(DATA_DIR, 'blogs.json')
    if not os.path.exists(filepath):
        return jsonify({'error': 'Not found'}), 404
    with open(filepath) as f:
        posts = json.load(f)
    post = next((p for p in posts if p.get('slug') == slug), None)
    if not post:
        return jsonify({'error': 'Not found'}), 404
    return jsonify(post)

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
        'slug': data['slug'],
        'title': data['title'],
        'excerpt': data['excerpt'],
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
    save_submission('blogs.json', post)
    return jsonify({'success': True, 'post': post}), 201

@app.route('/api/blogs/<slug>', methods=['PUT'])
def update_blog(slug):
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
    data = request.get_json(force=True)
    filepath = os.path.join(DATA_DIR, 'blogs.json')
    if not os.path.exists(filepath):
        return jsonify({'error': 'Not found'}), 404
    with open(filepath) as f:
        posts = json.load(f)
    updated = False
    for i, p in enumerate(posts):
        if p.get('slug') == slug:
            posts[i] = {**p, **data, 'updated_at': datetime.utcnow().isoformat()}
            updated = True
            break
    if not updated:
        return jsonify({'error': 'Post not found'}), 404
    with open(filepath, 'w') as f:
        json.dump(posts, f, indent=2)
    return jsonify({'success': True})

@app.route('/api/blogs/<slug>', methods=['DELETE'])
def delete_blog(slug):
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
    filepath = os.path.join(DATA_DIR, 'blogs.json')
    if not os.path.exists(filepath):
        return jsonify({'error': 'Not found'}), 404
    with open(filepath) as f:
        posts = json.load(f)
    posts = [p for p in posts if p.get('slug') != slug]
    with open(filepath, 'w') as f:
        json.dump(posts, f, indent=2)
    return jsonify({'success': True})

# ─── Email helper ─────────────────────────────────────────────────────────────
def _send_notification_email(subject, body):
    smtp_host = os.getenv('SMTP_HOST')
    smtp_user = os.getenv('SMTP_USER')
    smtp_pass = os.getenv('SMTP_PASS')
    notify_to = os.getenv('NOTIFY_EMAIL', 'waqaralioficial@gmail.com')
    if not (smtp_host and smtp_user and smtp_pass):
        return
    try:
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = notify_to
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))
        with smtplib.SMTP_SSL(smtp_host, 465) as server:
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, notify_to, msg.as_string())
    except Exception as e:
        print(f"Email send failed: {e}")

# ─── Serve React SPA ──────────────────────────────────────────────────────────
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    dist = app.static_folder
    if path and os.path.exists(os.path.join(dist, path)):
        return send_from_directory(dist, path)
    return send_from_directory(dist, 'index.html')

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_ENV', 'development') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug)
from flask import Flask, request, jsonify, send_from_directory
try:
    from flask_cors import CORS  # type: ignore
except Exception:
    # Minimal fallback if flask_cors isn't installed: add permissive CORS for /api/*
    def CORS(app, resources=None):
        @app.after_request
        def _cors_response(response):
            # Only apply to API routes if resources specified as {r"/api/*": {...}}
            try:
                path = getattr(request, 'path', '')
            except Exception:
                path = ''
            if not resources or any(r.startswith('/api') for r in resources):
                if path.startswith('/api/') or path == '/api' or resources is None:
                    response.headers['Access-Control-Allow-Origin'] = '*'
                    response.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS'
                    response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
            return response
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

app = Flask(__name__, static_folder='../Frontend/dist', static_url_path='')
CORS(app, resources={r"/api/*": {"origins": "*"}})

# ─── Data storage (file-based, replace with DB in production) ────────────────
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

# ─── Health check ─────────────────────────────────────────────────────────────
@app.route('/api/health')
def health():
    return jsonify({'status': 'ok', 'timestamp': datetime.utcnow().isoformat()})

# ─── Contact form ─────────────────────────────────────────────────────────────
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json(force=True)
    required = ['name', 'email', 'message']
    for field in required:
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

    # Optional: Send notification email (configure SMTP env vars)
    _send_notification_email(
        subject=f"[Softech] New Contact: {submission['name']}",
        body=f"""New contact form submission:

Name: {submission['name']}
Email: {submission['email']}
Phone: {submission['phone']}
Service: {submission['service']}

Message:
{submission['message']}
"""
    )

    return jsonify({'success': True, 'message': 'Thank you! We will be in touch within 24 hours.'}), 200

# ─── Quote request ────────────────────────────────────────────────────────────
@app.route('/api/quote', methods=['POST'])
def quote():
    data = request.get_json(force=True)
    required = ['name', 'email']
    for field in required:
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
        subject=f"[Softech] New Quote Request: {submission['name']} – {submission['service']}",
        body=f"""New quote request:

Name: {submission['name']}
Email: {submission['email']}
Phone: {submission['phone']}
Company: {submission['company']}

Service: {submission['service']}
Budget: {submission['budget']}
Timeline: {submission['timeline']}

Project Description:
{submission['description']}
"""
    )

    return jsonify({'success': True, 'message': 'Quote request received. Proposal incoming within 24–48 hours.'}), 200

# ─── Career / job application ─────────────────────────────────────────────────
@app.route('/api/apply', methods=['POST'])
def apply():
    data = request.get_json(force=True)
    required = ['name', 'email', 'position']
    for field in required:
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
        body=f"""New job application:

Position: {submission['position']}
Name: {submission['name']}
Email: {submission['email']}
Phone: {submission['phone']}
LinkedIn: {submission['linkedin']}
Portfolio: {submission['portfolio']}

Cover Letter:
{submission['cover']}
"""
    )

    return jsonify({'success': True, 'message': 'Application received! We will review and get back to you soon.'}), 200

# ─── Newsletter subscribe ─────────────────────────────────────────────────────
@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json(force=True)
    email = data.get('email', '').strip()
    if not email or '@' not in email:
        return jsonify({'error': 'Valid email required'}), 400
    submission = {'timestamp': datetime.utcnow().isoformat(), 'email': email}
    save_submission('subscribers.json', submission)
    return jsonify({'success': True, 'message': 'Subscribed successfully!'}), 200

# ─── Admin endpoints (basic, protect in production) ───────────────────────────
@app.route('/api/admin/contacts')
def admin_contacts():
    return _read_data('contacts.json')

@app.route('/api/admin/quotes')
def admin_quotes():
    return _read_data('quotes.json')

@app.route('/api/admin/applications')
def admin_applications():
    return _read_data('applications.json')

def _read_data(filename):
    filepath = os.path.join(DATA_DIR, filename)
    if not os.path.exists(filepath):
        return jsonify([])
    with open(filepath, 'r') as f:
        return jsonify(json.load(f))

# ─── Email helper (optional – set SMTP env vars to enable) ────────────────────
def _send_notification_email(subject, body):
    smtp_host = os.getenv('SMTP_HOST')
    smtp_user = os.getenv('SMTP_USER')
    smtp_pass = os.getenv('SMTP_PASS')
    notify_to = os.getenv('NOTIFY_EMAIL', 'waqaralioficial@gmail.com')

    if not (smtp_host and smtp_user and smtp_pass):
        return  # Email not configured – skip silently

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


# ─── Blog endpoints ───────────────────────────────────────────────────────────
@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    """Return all published blog posts (for admin, filter by published=True)."""
    return _read_data('blogs.json')

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
    """Admin: create a new blog post. 
    Body: { title, slug, excerpt, content, category, author, image, published }
    Secure this with an API key in production: check request.headers.get('X-Admin-Key').
    """
    admin_key = os.getenv('ADMIN_KEY', 'adminsecretkey123')
    if admin_key and request.headers.get('X-Admin-Key') != admin_key:
        return jsonify({'error': 'Unauthorized'}), 401

    data = request.get_json(force=True)
    required = ['title', 'slug', 'excerpt', 'content']
    for field in required:
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
    admin_key = os.getenv('ADMIN_KEY', 'adminsecretkey123')
    if admin_key and request.headers.get('X-Admin-Key') != admin_key:
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
    admin_key = os.getenv('ADMIN_KEY', 'adminsecretkey123')
    if admin_key and request.headers.get('X-Admin-Key') != admin_key:
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

# ─── Serve React SPA (production) ─────────────────────────────────────────────
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    dist = os.path.join(app.static_folder)
    if path and os.path.exists(os.path.join(dist, path)):
        return send_from_directory(dist, path)
    return send_from_directory(dist, 'index.html')

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_ENV', 'development') == 'development'
    app.run(host='0.0.0.0', port=port, debug=debug)

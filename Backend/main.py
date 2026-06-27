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

# Stronger CORS configuration to handle production headers safely
CORS(
    app,
    origins="*",
    allow_headers=["Content-Type", "X-Admin-Key"],
    methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"]
)

# ─── Data storage (MongoDB Atlas, with local JSON fallback for dev) ──────────
DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
os.makedirs(DATA_DIR, exist_ok=True)

MONGO_URI = os.getenv('MONGO_URI', '')
USE_MONGO = bool(MONGO_URI)
db = None

if USE_MONGO:
    try:
        from pymongo import MongoClient
        _client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000)
        _client.admin.command('ping')  # fail fast if URI/creds are wrong
        db = _client.get_database('softech')
        print("MongoDB connected successfully.")
    except Exception as e:
        print(f"MongoDB connection failed, falling back to JSON files: {e}")
        USE_MONGO = False
        db = None

# ✨ Added 'beauty.json' mapping here
_COLLECTION_MAP = {
    'blogs.json': 'blogs',
    'contacts.json': 'contacts',
    'quotes.json': 'quotes',
    'subscribers.json': 'subscribers',
    'automotive.json': 'automotive',
    'beauty.json': 'beauty',
}

def save_submission(filename, data):
    if USE_MONGO:
        try:
            collection_name = _COLLECTION_MAP.get(filename, filename.replace('.json', ''))
            db[collection_name].insert_one(dict(data))
            return
        except Exception as e:
            print(f"MongoDB Save Warning: {e}")
    # JSON fallback
    try:
        filepath = os.path.join(DATA_DIR, filename)
        submissions = []
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                try:
                    submissions = json.load(f)
                except Exception:
                    submissions = []
        submissions.append(data)
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(submissions, f, indent=2)
    except Exception as e:
        print(f"File Save Warning: {e}")

def _strip_mongo_id(doc):
    """Remove MongoDB's internal _id (ObjectId isn't JSON-serializable) before returning to the client."""
    if doc and '_id' in doc:
        doc = {k: v for k, v in doc.items() if k != '_id'}
    return doc

def _read_data(filename):
    if USE_MONGO:
        try:
            collection_name = _COLLECTION_MAP.get(filename, filename.replace('.json', ''))
            docs = list(db[collection_name].find({}))
            return [_strip_mongo_id(d) for d in docs]
        except Exception as e:
            print(f"MongoDB Read Warning: {e}")
            return []
    # JSON fallback
    filepath = os.path.join(DATA_DIR, filename)
    if not os.path.exists(filepath):
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump([], f)
        return []
    with open(filepath, 'r', encoding='utf-8') as f:
        try:
            return json.load(f)
        except Exception:
            return []

def _write_data(filename, data):
    if USE_MONGO:
        try:
            collection_name = _COLLECTION_MAP.get(filename, filename.replace('.json', ''))
            coll = db[collection_name]
            coll.delete_many({})
            if data:
                coll.insert_many([dict(d) for d in data])
            return
        except Exception as e:
            print(f"MongoDB Write Warning: {e}")
    # JSON fallback
    try:
        filepath = os.path.join(DATA_DIR, filename)
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
    except Exception as e:
        print(f"File Write Warning: {e}")

def _check_admin():
    admin_key = os.getenv('ADMIN_KEY', '')
    if not admin_key:
        return False
    received_key = request.headers.get('X-Admin-Key', '')
    return received_key == admin_key

# ─── Health check ─────────────────────────────────────────────────────────────
@app.route('/api/health')
def health():
    return jsonify({
        'status': 'ok',
        'timestamp': datetime.utcnow().isoformat(),
        'storage': 'mongodb' if USE_MONGO else 'json-file (not persistent on Render free tier!)'
    })

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
    
    try:
        _send_notification_email(
            subject=f"[Softech] New Contact: {submission['name']}",
            body=f"Name: {submission['name']}\nEmail: {submission['email']}\nPhone: {submission['phone']}\nService: {submission['service']}\n\nMessage:\n{submission['message']}"
        )
    except Exception as email_err:
        print(f"Non-blocking Notification Error: {email_err}")
        
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
    
    try:
        _send_notification_email(
            subject=f"[Softech] New Quote: {submission['name']} – {submission['service']}",
            body=f"Name: {submission['name']}\nCompany: {submission['company']}\nEmail: {submission['email']}\nPhone: {submission['phone']}\nService: {submission['service']}\nBudget: {submission['budget']}\nTimeline: {submission['timeline']}\nDescription:\n {submission['description']}"
        )
    except Exception as email_err:
        print(f"Non-blocking Notification Error: {email_err}")
        
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

@app.route('/api/admin/automotive')
def admin_automotive():
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
    return jsonify(_read_data('automotive.json'))

@app.route('/api/admin/beauty')
def admin_beauty():
    if not _check_admin():
        return jsonify({'error': 'Unauthorized'}), 401
    return jsonify(_read_data('beauty.json'))


# ─── JSON File Based Blog Endpoints ───────────────────────────────────────────
@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    try:
        posts = _read_data('blogs.json')
        is_admin = _check_admin()
        if not is_admin:
            posts = [p for p in posts if p.get('published', True)]
        return jsonify(posts)
    except Exception as e:
        print(f"Get Blogs Core Crash: {e}")
        return jsonify([]), 200

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


# ─── Automotive Leads ─────────────────────────────────────────────────────────
@app.route('/api/automotive-lead', methods=['POST'])
def handle_lead():
    try:
        data = request.get_json(force=True)
        
        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'message': data.get('message', '').strip() or 'N/A',
            'businessName': data.get('businessName', '').strip(),
            'businessType': data.get('businessType', '').strip(),
            'servicesOffered': data.get('servicesOffered', '').strip(),
            'location': data.get('location', '').strip(),
            'budget': data.get('budget', '').strip()
        }

        save_submission('automotive.json', submission)

        subject = f"🚗 New Automotive Lead: {submission['businessName'] or submission['name']}"
        body = f"""You have received a new lead from the Automotive Services Landing Page.

        --- STEP 1: CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}
        Message: {submission['message']}

        --- STEP 2: BUSINESS DETAILS ---
        Business Name: {submission['businessName']}
        Business Type: {submission['businessType']}
        Services Offered: {submission['servicesOffered']}
        Location / Area Served: {submission['location']}
        Monthly Ad Budget: {submission['budget']}"""

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking Automotive Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing automotive lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500


# ─── ✨ New: Beauty & Salon Leads EndPoint ──────────────────────────────────────
@app.route('/api/beauty-lead', methods=['POST'])
def handle_beauty_lead():
    try:
        data = request.get_json(force=True)
        
        # Validation for required fields
        for field in ['email', 'phone']:
            if not data.get(field):
                return jsonify({"status": "error", "message": f"Missing required field: {field}"}), 400

        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'businessName': data.get('businessName', '').strip() or 'N/A',
            'servicesOffered': data.get('servicesOffered', '').strip() or 'N/A',
            'message': data.get('message', '').strip() or 'N/A'
        }

        # Save submission across active databases (Persistent on Atlas/Dev)
        save_submission('beauty.json', submission)

        # Trigger clean non-blocking notification email
        subject = f"💇 New Beauty & Salon Lead: {submission['businessName'] or submission['name']}"
        body = f"""You have received a new lead from the Beauty & Salons Landing Page.

        --- CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}

        --- BUSINESS DETAILS ---
        Salon/Clinic Name: {submission['businessName']}
        Services Offered: {submission['servicesOffered']}

        --- MESSAGE ---
        Message: {submission['message']}"""

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking Beauty Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing beauty lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500


# ─── cleaning Leads ─────────────────────────────────────────────────────────
@app.route('/api/cleaning-lead', methods=['POST'])
def handle_Clean_lead():
    try:
        data = request.get_json(force=True)
        
        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'message': data.get('message', '').strip() or 'N/A',
            'businessName': data.get('businessName', '').strip(),
            'businessType': data.get('businessType', '').strip(),
            'servicesOffered': data.get('servicesOffered', '').strip(),
            'location': data.get('location', '').strip(),
            'budget': data.get('budget', '').strip()
        }

        save_submission('cleaning.json', submission)

        subject = f"🧹 New Cleaning Lead: {submission['businessName'] or submission['name']}"
        body = f"""You have received a new lead from the Cleaning Services Landing Page.

        --- STEP 1: CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}
        Message: {submission['message']}

        --- STEP 2: BUSINESS DETAILS ---
        Business Name: {submission['businessName']}
        Business Type: {submission['businessType']}
        Services Offered: {submission['servicesOffered']}
        Location / Area Served: {submission['location']}
        Monthly Ad Budget: {submission['budget']}"""

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking Cleaning Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing cleaning lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500
    

# ─── e-commerce Leads ─────────────────────────────────────────────────────────
@app.route('/api/ecommerce-lead', methods=['POST'])
def handle_Ecommerce_lead():
    try:
        data = request.get_json(force=True)
        
        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'message': data.get('message', '').strip() or 'N/A',
            'businessName': data.get('businessName', '').strip(),
            'website': data.get('webiste', '').strip(),
            'productsCategory': data.get('productsCategory', '').strip(),
            'budget': data.get('budget', '').strip()
        }

        save_submission('ecommerce.json', submission)

        subject = f"🧸 New ecommerce Lead: {submission['businessName'] or submission['name']}"
        body = f"""You have received a new lead from the ecommerce Services Landing Page.

        --- STEP 1: CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}
        Message: {submission['message']}

        --- STEP 2: BUSINESS DETAILS ---
        Business Name: {submission['businessName']}
        products Category: {submission['productsCategory']}
        website: {submission['website']}
        Ad Budget: {submission['budget']}"""

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking Ecommerce Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing ecommerce lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500
    
    
# ─── education Leads ─────────────────────────────────────────────────────────
@app.route('/api/education-lead', methods=['POST'])
def handle_Education_lead():
    try:
        data = request.get_json(force=True)
        
        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'message': data.get('message', '').strip() or 'N/A',
            'instituteName': data.get('instituteName', '').strip(),
            'coursesOffered': data.get('coursesOffered', '').strip(),
            'targetStudents': data.get('targetStudents', '').strip(),
            'budget': data.get('budget', '').strip()
        }

        save_submission('education.json', submission)

        subject = f"🎓 New education Lead: {submission['instituteName'] or submission['name']}"
        body = f"""You have received a new lead from the education Services Landing Page.

        --- STEP 1: CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}
        Message: {submission['message']}

        --- STEP 2: BUSINESS DETAILS ---
        Institute Name: {submission['instituteName']}
        Courses Offered: {submission['coursesOffered']}
       Target Students: {submission['targetStudents']}
        Ad Budget: {submission['budget']}"""

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking education Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing education lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500
    

# ─── finance Leads ─────────────────────────────────────────────────────────
@app.route('/api/finance-lead', methods=['POST'])
def handle_Finance_lead():
    try:
        data = request.get_json(force=True)
        
        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'message': data.get('message', '').strip() or 'N/A',
            'companyName': data.get('companyName', '').strip(),
            'servicesOffered': data.get('servicesOffered', '').strip(),
            'targetClientType': data.get('targetClientType', '').strip(),
            'budget': data.get('budget', '').strip()
        }

        save_submission('finance.json', submission)

        subject = f"🏛️ New finance Lead: {submission['companyName'] or submission['name']}"
        body = f"""You have received a new lead from the finance Services Landing Page.

        --- STEP 1: CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}
        Message: {submission['message']}

        --- STEP 2: BUSINESS DETAILS ---
        Company Name: {submission['companyName']}
        Services Offered: {submission['servicesOffered']}
        Target Client Type: {submission['targetClientType']}
        Ad Budget: {submission['budget']}"""

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking finance Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing finance lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500


# ─── Fitness Leads ─────────────────────────────────────────────────────────
@app.route('/api/fitness-lead', methods=['POST'])
def handle_Fitness_lead():
    try:
        data = request.get_json(force=True)
        
        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'message': data.get('message', '').strip() or 'N/A',
            'gymStudioName': data.get('gymStudioName', '').strip(),
            'servicesOffered': data.get('servicesOffered', '').strip(),
            'location': data.get('location', '').strip(),
            'budget': data.get('budget', '').strip()
        }

        save_submission('fitness.json', submission)

        subject = f"🥊 New fitness Lead: {submission['gymStudioName'] or submission['name']}"
        body = f"""You have received a new lead from the fitness Services Landing Page.

        --- STEP 1: CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}
        Message: {submission['message']}

        --- STEP 2: BUSINESS DETAILS ---
        GYM Studio Name: {submission['gymStudioName']}
        Services Offered: {submission['servicesOffered']}
        location: {submission['location']}
        Ad Budget: {submission['budget']}"""

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking fitness Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing fitness lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500
    

# ─── Healthcare Leads ─────────────────────────────────────────────────────────
@app.route('/api/healthcare-lead', methods=['POST'])
def handle_Healthcare_lead():
    try:
        data = request.get_json(force=True)
        
        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'message': data.get('message', '').strip() or 'N/A',
            'practiceHospitalName': data.get('practiceHospitalName', '').strip(),
            'specialtyService': data.get('specialtyService', '').strip(),
            'location': data.get('location', '').strip(),
            'budget': data.get('budget', '').strip()
        }

        save_submission('health.json', submission)

        subject = f"🩺 New healthcare Lead: {submission['practiceHospitalName'] or submission['name']}"
        body = f"""You have received a new lead from the healthcare Services Landing Page.

        --- STEP 1: CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}
        Message: {submission['message']}

        --- STEP 2: BUSINESS DETAILS ---
        Hospital Name: {submission['practiceHospitalName']}
        Specialty Service: {submission['specialtyService']}
        location: {submission['location']}
        Ad Budget: {submission['budget']}"""

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking healthcare Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing healthcare lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500


# ─── home-Improvement Leads ─────────────────────────────────────────────────────────
@app.route('/api/home-improvement-lead', methods=['POST'])
def handle_Home_Improve_lead():
    try:
        data = request.get_json(force=True)
        
        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'message': data.get('message', '').strip() or 'N/A',
            'businessName': data.get('businessName', '').strip(),
            'serviceInterestedIn': data.get('serviceInterestedIn', '').strip(),
            'location': data.get('location', '').strip(),
            'budget': data.get('budget', '').strip()
        }

        save_submission('homeImprovement.json', submission)

        subject = f"🔨 New home-improvement Lead: {submission['businessName'] or submission['name']}"
        body = f"""You have received a new lead from the home-improvement Services Landing Page.

        --- STEP 1: CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}
        Message: {submission['message']}

        --- STEP 2: BUSINESS DETAILS ---
        Business Name: {submission['businessName']}
        Service InterestedIn: {submission['serviceInterestedIn']}
        location: {submission['location']}
        Ad Budget: {submission['budget']}"""

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking home-improvement Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing home-improvement lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500
    

# ─── constructions Leads ─────────────────────────────────────────────────────────
@app.route('/api/construction-lead', methods=['POST'])
def handle_Construction_lead():
    try:
        data = request.get_json(force=True)
        
        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'CompanyName': data.get('CompanyName', '').strip(),
            'CompanyType': data.get('CompanyType', '').strip(),
            'message': data.get('message', '').strip() or 'N/A',
            'servicesOffered': data.get('servicesOffered', '').strip(),
            'location': data.get('location', '').strip(),
            'budget': data.get('budget', '').strip()
        }

        save_submission('contruction.json', submission)

        subject = f"🏢 New Construction Lead: {submission['CompanyName'] or submission['name']}"
        body = f"""You have received a new lead from the Constructions Services Landing Page.

        --- STEP 1: CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}
        Company Name: {submission['CompanyName']}
        Company Type: {submission['CompanyType']}
        Message: {submission['message']}

        --- STEP 2: BUSINESS DETAILS ---
        Services Offered: {submission['servicesOffered']}
        Location / Area Served: {submission['location']}
        Monthly Ad Budget: {submission['budget']}"""

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking Construction Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing constructions lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500
    

 # ─── dental Leads ─────────────────────────────────────────────────────────    
@app.route('/api/dental-lead', methods=['POST'])
def handle_dental_lead():
    try:
        data = request.get_json(force=True)
        
        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'clinicName': data.get('clinicName', '').strip(),
            'dentalServices': data.get('dentalServices', '').strip(),
            'message': data.get('message', '').strip() or 'N/A',
            
        }

        save_submission('dental.json', submission)

        subject = f"🦷 New Dental Lead: {submission['clinicName'] or submission['name']}"
        body = f"""You have received a new lead from the dental Services Landing Page.

        --- CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}
        Clinic Name: {submission['clinicName']}
        Dental Services: {submission['dentalServices']}
        Message: {submission['message']}
       """

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking dental Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing dental lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500
    
    
    # ─── agnecy Leads ─────────────────────────────────────────────────────────    
@app.route('/api/agency-lead', methods=['POST'])
def handle_agency_lead():
    try:
        data = request.get_json(force=True)
        
        submission = {
            'timestamp': datetime.utcnow().isoformat(),
            'name': data.get('name', '').strip(),
            'email': data.get('email', '').strip(),
            'phone': data.get('phone', '').strip(),
            'agencyName': data.get('agencyName', '').strip(),
            'servicesOffered': data.get('servicesOffered', '').strip(),
            'monthlyAdBudget': data.get('monthlyAdBudget', '').strip(),
            'message': data.get('message', '').strip() or 'N/A',
            
        }

        save_submission('agency.json', submission)

        subject = f"🎨 New Agency Marketing Lead: {submission['agencyName'] or submission['name']}"
        body = f"""You have received a new lead from the agency Marketing Services Landing Page.

        --- CONTACT DETAILS ---
        Name: {submission['name']}
        Email: {submission['email']}
        Phone: {submission['phone']}
        Agency Name: {submission['agencyName']}
        Services Offered: {submission['servicesOffered']}
        monthly ad Budgets: {submission['monthlyAdBudget']}
        Message: {submission['message']}
       """

        try:
            _send_notification_email(subject=subject, body=body)
        except Exception as email_err:
            print(f"Non-blocking agency marketing Email Error: {email_err}")

        return jsonify({"status": "success", "message": "Lead saved and processed successfully!"}), 200

    except Exception as e:
        print(f"Error processing agency marketing lead: {str(e)}")
        return jsonify({"status": "error", "message": "Internal server error."}), 500
    

# ─── Email helper ─────────────────────────────────────────────────────────────
def _send_notification_email(subject, body):
    smtp_host = os.getenv('SMTP_HOST')
    smtp_user = os.getenv('SMTP_USER')
    smtp_pass = os.getenv('SMTP_PASS')
    notify_to = os.getenv('NOTIFY_EMAIL')
    
    if not (smtp_host and smtp_user and smtp_pass):
        print("Email Warning: Missing environment variables configuration.")
        return False
        
    try:
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = notify_to
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))
        
        with smtplib.SMTP(smtp_host, 587, timeout=15) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, notify_to, msg.as_string())
            
        print("Production Email outbound completed successfully!")
        return True
    except Exception as e:
        print(f"CRITICAL SYSTEM WARNING: Nodemailer service unavailable on current server: {e}")
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
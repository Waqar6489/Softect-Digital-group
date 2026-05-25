# Softech Digital Group – Website

## Project Structure

```
Softech Digital Group/
├── Frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Components/
│   │   └── index.css
│   ├── vite.config.js
│   └── package.json
├── Backend/           # Flask API
│   ├── main.py
│   ├── requirements.txt
│   ├── data/          # Auto-created for form submissions
│   └── .env.example
└── README.md
```

## Local Development

### Frontend
```bash
cd Frontend
npm install
npm run dev        # http://localhost:5173
```

### Backend
```bash
cd Backend
pip install -r requirements.txt
cp .env.example .env  # edit with your SMTP creds
python main.py         # http://localhost:5000
```

The Vite dev server proxies `/api/*` calls to Flask on port 5000.

## Production Deployment

### Build Frontend
```bash
cd Frontend
npm run build      # outputs to Frontend/dist/
```

### Run Backend (serves both API + static files)
```bash
cd Backend
gunicorn main:app --bind 0.0.0.0:5000 --workers 2
```

Or with environment variables:
```bash
FLASK_ENV=production PORT=5000 gunicorn main:app
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/health | Health check |
| POST | /api/contact | Contact form submission |
| POST | /api/quote | Get a Quote form |
| POST | /api/apply | Job application |
| POST | /api/subscribe | Newsletter subscribe |
| GET | /api/admin/contacts | View all contacts |
| GET | /api/admin/quotes | View all quote requests |
| GET | /api/admin/applications | View all job applications |

## Environment Variables (Backend/.env)

```
FLASK_ENV=production
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_USER=your@gmail.com
SMTP_PASS=your_app_password
NOTIFY_EMAIL=info@softechdigitalgroup.com
```

## Blog Admin API

Write and manage blog posts via the REST API. Secure with `ADMIN_KEY` env var.

### Create a post
```bash
curl -X POST https://yoursite.com/api/blogs \
  -H "Content-Type: application/json" \
  -H "X-Admin-Key: your_admin_key" \
  -d '{
    "title": "My New Post",
    "slug": "my-new-post",
    "excerpt": "Short description...",
    "content": "Full article content here...",
    "category": "Technology",
    "author": "Softech Team",
    "image": "https://...",
    "featured": false,
    "published": true
  }'
```

### Update a post
```bash
curl -X PUT https://yoursite.com/api/blogs/my-new-post \
  -H "X-Admin-Key: your_admin_key" \
  -d '{"title": "Updated Title"}'
```

### Delete a post
```bash
curl -X DELETE https://yoursite.com/api/blogs/my-new-post \
  -H "X-Admin-Key: your_admin_key"
```

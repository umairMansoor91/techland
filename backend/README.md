# TechLand Backend API

Django REST API for handling client inquiries and developer applications.

## Features

- **Client Inquiry API** - Handle consultancy service requests
- **Developer Application API** - Process job applications with resume uploads
- **Spam Protection** - Honeypot fields, rate limiting, reCAPTCHA v3
- **Email Notifications** - Automatic notifications for new submissions
- **Admin Panel** - Full Django admin for managing submissions

## Quick Start (Development)

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Copy environment file
cp .env.example .env
# Edit .env with your settings

# Run migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health/` | GET | Health check |
| `/api/inquiries/` | POST | Submit client inquiry |
| `/api/applications/` | POST | Submit developer application |
| `/api/applications/positions/` | GET | List open positions |
| `/api/docs/` | GET | Swagger API documentation |

## Deployment (VPS)

```bash
# On your VPS
sudo bash deploy.sh
```

See `deploy.sh` for full deployment instructions.

## Environment Variables

See `.env.example` for all required configuration options.

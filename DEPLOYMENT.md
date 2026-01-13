# TechLand Deployment Guide

Deploy TechLand on a Contabo VPS (Ubuntu 22.04).

## Server Configuration

| Setting | Value |
|---------|-------|
| **VPS IP** | `84.247.177.56` |
| **Domain** | `thetechland.com` |
| **SSH User** | `root` |
| **SSH Password** | `saadhamza` |
| **Database** | PostgreSQL |
| **DB Name** | `techland_db` |
| **DB User** | `techland_user` |
| **DB Password** | `techland123` |

## GitHub Repository

- **URL**: https://github.com/umairMansoor91/techland
- **Auto-deploy**: Push to `main` branch triggers deployment via GitHub Actions

### GitHub Secrets Required

Add these in Settings → Secrets → Actions:

| Secret | Value |
|--------|-------|
| `VPS_HOST` | `84.247.177.56` |
| `VPS_USERNAME` | `root` |
| `VPS_PASSWORD` | `saadhamza` |

## Quick Start

```bash
# 1. SSH into your VPS
ssh root@84.247.177.56

# 2. Run the setup script
bash deploy.sh
```

The script installs all required packages and shows next steps.

---

## Step-by-Step Deployment

### 1. Install Packages

```bash
sudo apt update
sudo apt install -y python3 python3-pip python3-venv nginx postgresql postgresql-contrib redis-server certbot python3-certbot-nginx git

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### 2. Create Directories

```bash
sudo mkdir -p /var/www/techland
sudo mkdir -p /var/log/gunicorn
sudo chown -R $USER:$USER /var/www/techland
sudo chown -R $USER:$USER /var/log/gunicorn
```

### 3. Clone Repository

```bash
cd /var/www/techland
git clone YOUR_REPO_URL .
```

### 4. Setup Database

```bash
sudo -u postgres psql
```

```sql
CREATE DATABASE techland_db;
CREATE USER techland_user WITH PASSWORD 'yourpassword';
GRANT ALL PRIVILEGES ON DATABASE techland_db TO techland_user;
ALTER DATABASE techland_db OWNER TO techland_user;
\q
```

### 5. Setup Backend

```bash
cd /var/www/techland/backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
nano .env
```

Update `.env`:
```ini
DEBUG=False
SECRET_KEY=generate-a-new-key
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
DATABASE_URL=postgres://techland_user:yourpassword@localhost:5432/techland_db
REDIS_URL=redis://localhost:6379/1
CORS_ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

Generate SECRET_KEY:
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Run migrations:
```bash
python manage.py migrate
python manage.py collectstatic --noinput
python manage.py createsuperuser
```

### 6. Setup Frontend

```bash
cd /var/www/techland/TechLand

# Update API URL
nano src/lib/api.ts
# Change: const API_BASE_URL = 'https://yourdomain.com/api';

# Build
npm install
npm run build

# Copy to serve directory
mkdir -p /var/www/techland/frontend
cp -r dist/* /var/www/techland/frontend/
```

### 7. Configure Services

```bash
# Copy service files
sudo cp /var/www/techland/backend/techland.service /etc/systemd/system/
sudo cp /var/www/techland/backend/nginx.conf /etc/nginx/sites-available/techland
sudo ln -sf /etc/nginx/sites-available/techland /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Update nginx.conf with your domain
sudo nano /etc/nginx/sites-available/techland
# Replace yourdomain.com with your actual domain

# Start services
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl daemon-reload
sudo systemctl enable techland
sudo systemctl start techland
```

### 8. Setup SSL

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Updating

```bash
cd /var/www/techland
git pull

# Backend
cd backend
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py collectstatic --noinput
sudo systemctl restart techland

# Frontend
cd ../TechLand
npm install
npm run build
cp -r dist/* /var/www/techland/frontend/
```

---

## Useful Commands

```bash
# Check status
sudo systemctl status techland
sudo systemctl status nginx

# View logs
sudo journalctl -u techland -f

# Restart
sudo systemctl restart techland
sudo systemctl restart nginx

# Database backup
pg_dump -U techland_user -h localhost techland_db > backup.sql
```

---

## URLs

- Website: `https://thetechland.com`
- Admin: `https://thetechland.com/admin/`
- API Docs: `https://thetechland.com/api/docs/`

## DNS Configuration

Add these A records in your domain registrar:

| Host | Type | TTL | IP Address |
|------|------|-----|------------|
| `@` | A | 4 hrs | `84.247.177.56` |
| `www` | A | 4 hrs | `84.247.177.56` |

## SSL Setup (After DNS Propagation)

```bash
ssh root@84.247.177.56
sudo certbot --nginx -d thetechland.com -d www.thetechland.com
```

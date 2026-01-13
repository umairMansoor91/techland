#!/bin/bash
# Simple deployment script for TechLand on Ubuntu VPS

set -e

echo "=== TechLand Deployment ==="

# Install packages
echo "Installing packages..."
sudo apt update
sudo apt install -y python3 python3-pip python3-venv nginx postgresql postgresql-contrib redis-server certbot python3-certbot-nginx

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Create directories
sudo mkdir -p /var/www/techland
sudo mkdir -p /var/log/gunicorn
sudo chown -R $USER:$USER /var/www/techland
sudo chown -R $USER:$USER /var/log/gunicorn

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Next steps:"
echo "1. Clone your repo:  cd /var/www/techland && git clone YOUR_REPO_URL ."
echo "2. Setup database:   sudo -u postgres psql"
echo "   CREATE DATABASE techland_db;"
echo "   CREATE USER techland_user WITH PASSWORD 'yourpassword';"
echo "   GRANT ALL PRIVILEGES ON DATABASE techland_db TO techland_user;"
echo "   ALTER DATABASE techland_db OWNER TO techland_user;"
echo "   \\q"
echo ""
echo "3. Setup backend:"
echo "   cd /var/www/techland/backend"
echo "   python3 -m venv venv"
echo "   source venv/bin/activate"
echo "   pip install -r requirements.txt"
echo "   cp .env.example .env"
echo "   nano .env  # Update DATABASE_URL, SECRET_KEY, etc."
echo "   python manage.py migrate"
echo "   python manage.py collectstatic --noinput"
echo "   python manage.py createsuperuser"
echo ""
echo "4. Setup frontend:"
echo "   cd /var/www/techland/TechLand"
echo "   nano src/lib/api.ts  # Update API_BASE_URL"
echo "   npm install && npm run build"
echo "   mkdir -p /var/www/techland/frontend"
echo "   cp -r dist/* /var/www/techland/frontend/"
echo ""
echo "5. Copy config files:"
echo "   sudo cp /var/www/techland/backend/techland.service /etc/systemd/system/"
echo "   sudo cp /var/www/techland/backend/nginx.conf /etc/nginx/sites-available/techland"
echo "   sudo ln -sf /etc/nginx/sites-available/techland /etc/nginx/sites-enabled/"
echo "   sudo rm -f /etc/nginx/sites-enabled/default"
echo ""
echo "6. Update nginx.conf with your domain, then:"
echo "   sudo nginx -t"
echo "   sudo systemctl restart nginx"
echo "   sudo systemctl daemon-reload"
echo "   sudo systemctl enable techland"
echo "   sudo systemctl start techland"
echo ""
echo "7. Setup SSL:"
echo "   sudo certbot --nginx -d yourdomain.com"

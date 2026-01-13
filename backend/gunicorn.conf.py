"""
Gunicorn configuration file for production deployment.
"""
import multiprocessing

# Bind to localhost, Nginx will proxy
bind = "127.0.0.1:8000"

# Number of worker processes
workers = multiprocessing.cpu_count() * 2 + 1

# Worker class
worker_class = "sync"

# Timeout for worker processes
timeout = 120

# Keep-alive connections
keepalive = 5

# Logging
accesslog = "/var/log/gunicorn/access.log"
errorlog = "/var/log/gunicorn/error.log"
loglevel = "info"

# Process naming
proc_name = "techland_api"

# Daemon mode (set to True if running without systemd)
daemon = False

# Reload on code changes (development only, set to False in production)
reload = False

# Max requests per worker before restart (helps with memory leaks)
max_requests = 1000
max_requests_jitter = 50

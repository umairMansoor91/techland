@echo off
echo === TechLand Backend Local Setup ===
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    pause
    exit /b 1
)

REM Create virtual environment
echo [1/6] Creating virtual environment...
python -m venv venv

REM Activate virtual environment
echo [2/6] Activating virtual environment...
call venv\Scripts\activate.bat

REM Install dependencies
echo [3/6] Installing dependencies...
pip install --upgrade pip
pip install -r requirements.txt

REM Create .env file if not exists
echo [4/6] Setting up environment...
if not exist .env (
    copy .env.example .env
    echo Created .env file - using default development settings
)

REM Run migrations
echo [5/6] Running database migrations...
python manage.py migrate

REM Create superuser
echo [6/6] Creating admin superuser...
echo.
python manage.py createsuperuser

echo.
echo === Setup Complete ===
echo.
echo To start the server, run:
echo   venv\Scripts\activate
echo   python manage.py runserver
echo.
echo Then visit:
echo   API:   http://127.0.0.1:8000/api/
echo   Admin: http://127.0.0.1:8000/admin/
echo   Docs:  http://127.0.0.1:8000/api/docs/
echo.
pause

import os
import sys

settings_path = 'backend/config/settings.py'
with open(settings_path, 'r') as f:
    content = f.read()

# Replace DATABASES block
old_db = """DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}"""
new_db = """DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'lescretes',
        'USER': 'user',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}"""
content = content.replace(old_db, new_db)

if 'AUTH_USER_MODEL' not in content:
    content += "\nAUTH_USER_MODEL = 'users.CustomUser'\n"

with open(settings_path, 'w') as f:
    f.write(content)

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('Admin', 'Admin'),
        ('Teacher', 'Teacher'),
        ('Parent', 'Parent'),
        ('Student', 'Student'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='Student')

    class Meta:
        app_label = 'users'

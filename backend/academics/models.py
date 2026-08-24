from django.db import models

class Cycle(models.Model):
    NAME_CHOICES = [
        ('Maternelle', 'Maternelle'),
        ('Primaire', 'Primaire'),
        ('College', 'Collège'),
        ('Lycee', 'Lycée'),
    ]
    name = models.CharField(max_length=20, choices=NAME_CHOICES, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Branch(models.Model):
    name = models.CharField(max_length=100)
    cycle = models.ForeignKey(Cycle, on_delete=models.CASCADE, related_name='branches')
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name} ({self.cycle.name})"

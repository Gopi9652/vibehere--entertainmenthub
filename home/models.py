from django.db import models

# Create your models here.
class Vibe(models.Model):
    name = models.CharField(max_length=100, unique=True, null=False, blank=False, default='user')
    phone = models.CharField(max_length=10, unique=True, null=False, blank=False)
    def __str__(self):
        ss=self.name+self.phone
        return ss
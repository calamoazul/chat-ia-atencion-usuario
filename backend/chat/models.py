from django.db import models

"""Modelo para Clientde la aplicación"""
class Client(models.Model):
    id = models.BigAutoField(primary_key=True, auto_created=True)
    name = models.CharField(max_length=100)
    email = models.CharField(unique=True)

    def __str__(self):
        return self.name
    
"""Modelo para vehículo"""
class Car(models.Model):
    id = models.BigAutoField(primary_key=True, blank=False, auto_created=True)
    brand = models.CharField(max_length=100, blank=False)
    model = models.CharField(max_length=100, blank=False)
    price = models.BigIntegerField(blank=False)
    def __str__(self):
        return self.brand + " " + self.name
    
"""Modelo de dudas frecuentes"""
class Faqs(models.Model):
    id = models.BigAutoField(primary_key=True, blank=False, auto_created=True)
    faq = models.TextField(blank=False, unique=False)
    about = models.CharField(default="Dudas sobre entregas", blank=False, unique=False, max_length=100)
    def __str__(self):
        return self.faq
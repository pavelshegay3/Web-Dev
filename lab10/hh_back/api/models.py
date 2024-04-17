from django.db import models

# Create your models here.
class Company(models.Model):
  name = models.CharField(max_length=100)
  description = models.CharField(max_length=100)
  city = models.CharField(max_length=100)
  address = models.TextField()

  class Meta:
    verbose_name_plural = "companies"

  def __str__(self):
    return self.name

class Vacancy(models.Model):
  name = models.CharField(max_length=100)
  description = models.CharField(max_length=100)
  salary = models.FloatField()
  company = models.ForeignKey(Company, related_name='vacancies', on_delete=models.CASCADE)

  class Meta:
    verbose_name_plural = "vacancies"

  def __str__(self):
    return self.name


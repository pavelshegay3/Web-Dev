# Generated by Django 5.0.3 on 2024-04-17 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_vacancy'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='vacancy',
            options={'verbose_name_plural': 'vacancies'},
        ),
        migrations.AlterField(
            model_name='company',
            name='description',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='description',
            field=models.CharField(max_length=100),
        ),
    ]

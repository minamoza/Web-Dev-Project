# Generated by Django 3.1 on 2021-04-25 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210421_1708'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='description',
            field=models.TextField(max_length=500, null=True),
        ),
    ]

# Generated by Django 4.1.1 on 2023-05-19 17:47

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0021_alter_user_image"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="image",
        ),
    ]

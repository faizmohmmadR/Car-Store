# Generated by Django 4.1.1 on 2023-05-12 06:35

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0019_alter_user_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="image",
            field=models.ImageField(default="", upload_to="uploads/images"),
        ),
    ]
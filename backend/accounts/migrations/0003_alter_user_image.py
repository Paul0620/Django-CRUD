# Generated by Django 3.2.9 on 2022-02-01 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_user_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='image',
            field=models.ImageField(upload_to='accounts/%Y/%m/%d', verbose_name='프로필 이미지'),
        ),
    ]

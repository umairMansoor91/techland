# Generated manually to remove resume field

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='developerapplication',
            name='resume',
        ),
    ]

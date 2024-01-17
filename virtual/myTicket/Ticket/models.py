from django.contrib.auth.models import AbstractUser, User
from django.db import models

class CustomUser(AbstractUser):
    class Meta:
        db_table = 'custom_user'
        app_label = 'Ticket'

CustomUser._meta.get_field('groups').remote_field.related_name = 'custom_user_groups'
CustomUser._meta.get_field('user_permissions').remote_field.related_name = 'custom_user_permissions'

class YourModel(models.Model):
    field1 = models.CharField(max_length=100)
    field2 = models.IntegerField()


    def __str__(self):
        return self.field1
        
class Tickets(models.Model):
    TicketID = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    DateTime = models.DateTimeField()
    DepartmentName = models.CharField(max_length=100)
    RequestType = models.CharField(max_length=100)
    Description = models.TextField()
    PriorityLevel = models.IntegerField()

class TicketNotes(models.Model):
    note_id = models.AutoField(primary_key=True)
    ticket = models.ForeignKey(Tickets, on_delete=models.CASCADE)
    admin = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    note_text = models.TextField()
    change_status = models.CharField(max_length=12, choices=[('done', 'Done'), ('in_progress', 'In Progress'), ('not_seen', 'Not Seen')])
    timestamp = models.DateTimeField(auto_now_add=True)

class LoginAttempt(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    failed_attempts = models.PositiveIntegerField(default=0)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class ITRequest(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    date = models.DateField()
    department_name = models.CharField(max_length=255)
    request_type = models.CharField(max_length=255, choices=[
        ('hardwareIssue', 'Hardware Issue'),
        ('softwareIssue', 'Software Issue'),
        ('updateUpgrade', 'Update & Upgrade'),
        ('installProgram', 'Install Program'),
        ('boostSystem', 'Boost System'),
        ('repair', 'Repair'),
    ])
    description = models.TextField()
    work_force = models.IntegerField(default=5, validators=[MinValueValidator(0), MaxValueValidator(10)])

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.request_type}"

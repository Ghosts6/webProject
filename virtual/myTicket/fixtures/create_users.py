from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Creates regular users'

    def handle(self, *args, **kwargs):
        User = get_user_model()

        # Create users
        self.create_user(User, 'kia', 'kb123456', 'user1@example.com')
        self.create_user(User, 'mmd', 'test123', 'user2@example.com')
        # Add more users as needed

    def create_user(self, User, username, password, email):
        # Check if user already exists
        if not User.objects.filter(username=username).exists():
            # Create a regular user
            new_user = User.objects.create_user(username=username, password=password, email=email)
            self.stdout.write(self.style.SUCCESS(f'Created user: {username}'))
        else:
            self.stdout.write(self.style.WARNING(f'User {username} already exists'))
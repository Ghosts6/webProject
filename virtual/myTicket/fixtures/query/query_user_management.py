# check user existent in data base replace test and data with name you want to check

user_exists = User.objects.filter(username='test').exists()


if not user_exists:
    # Create 'test' user if it doesn't exist
    User.objects.create_user(username='test', password='test123')
    print("User 'test' created successfully!")
else:
    print("User 'test' already exists.")

# method to check all user in database


all_users = User.objects.all()

for user in all_users:
    print(user.username)
# to create user from models.py
User.objects.create_user(username='kia', password='KB123456')

#------------to check user permission

from django.contrib.auth.models import User, Permission

def get_user_permissions(username):
    user = User.objects.get(username=username)
    user_permissions = user.user_permissions.all()
    return user_permissions

# Usage example
kia_permissions = get_user_permissions('kia')
test_permissions = get_user_permissions('test')

print("Permissions for Kia:")
for permission in kia_permissions:
    print(permission.codename)

print("\nPermissions for Test:")
for permission in test_permissions:
    print(permission.codename)
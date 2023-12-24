from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User
from ldap3 import Server, Connection, SIMPLE, SYNC, ALL

class ActiveDirectoryBackend(BaseBackend):

    def authenticate(self, request, username=None, password=None):
        if username is None or password is None:
            return None

        server = Server('ldap://your-ad-server', get_info=ALL)
        conn = Connection(server, user='DOMAIN\\' + username, password=password, authentication=SIMPLE, auto_bind=True)

        if conn.bind():
            # Check if the user already exists in Django's database
            user, created = User.objects.get_or_create(username=username)
            return user if created else None

        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None


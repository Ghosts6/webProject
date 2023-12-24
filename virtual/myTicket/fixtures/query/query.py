from django.contrib.auth.models import User
# Selecting Username and Password from Users table
users_data = User.objects.values('username', 'password')
# Selecting FirstName, LastName, DateTime, RequestType from Tickets table
tickets_data = Tickets.objects.values('FirstName', 'LastName', 'DateTime', 'RequestType')
# Selecting Username, RequestType, DateTime, Description from Users and Tickets tables joined
joined_data = User.objects.values('username', 'tickets__RequestType', 'tickets__DateTime', 'tickets__Description').filter(tickets__user=F('username'))

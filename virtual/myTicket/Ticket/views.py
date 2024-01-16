from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from .models import LoginAttempt

def loading(request):
    return render(request, 'loading.html')

def main(request):
    if request.method == 'POST':
        form = ITRequestForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('redirect') 
    else:
        form = ITRequestForm()

    return render(request, 'Ticket/main.html', {'form': form})

def redirect(request):
    return render(request, 'redirect.html')

def status(request):
     user_tickets = Ticket.objects.filter(created_by=request.user)
    return render(request, 'Ticket/my_tickets.html', {'user_tickets': user_tickets})

def admin_main(request):
    all_tickets = Ticket.objects.all()
    return render(request, 'Ticket/all_tickets.html', {'all_tickets': all_tickets})

def admin_request(request):   
     tickets = Ticket.objects.all()

    if request.method == 'POST':
        selected_ticket_id = request.POST.get('selected_ticket')
        admin_note = request.POST.get('adminNote')
        status = request.POST.get('status')

        if selected_ticket_id:
            selected_ticket = Ticket.objects.get(pk=selected_ticket_id)
            selected_ticket.admin_note = admin_note
            selected_ticket.status = status
            selected_ticket.save()

    return render(request, 'Ticket/admin_management.html', {'tickets': tickets})

def admin_redirect(request):
    return render(request, 'admin_main.html')

def custom_404_error_view(request, exception):
    return render(request, '404.html', status=404)

def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            auth_login(request, user)
            return redirect('loading')  # Redirect to loading page after successful login
        else:
            # Failed login attempt - Track login attempts
            attempt, created = LoginAttempt.objects.get_or_create(user=user)
            if not created:
                attempt.failed_attempts += 1
                attempt.save()

            # Check if attempts exceed limit (e.g., 5 attempts)
            if attempt.failed_attempts >= 5:
                # Implement logic for lockout (e.g., display lockout message)
                return render(request, 'lockout.html')

            return render(request, 'login.html', {'error_message': 'Invalid credentials'})

    return render(request, 'login.html')



    

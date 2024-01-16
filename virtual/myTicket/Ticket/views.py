from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from .models import LoginAttempt

def loading(request):
    return render(request, 'loading.html')

def loading(request):
    return render(request, 'loading.html')

def main(request):
    if request.method == 'POST':
        form = ITRequestForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('redirect')  # Replace 'redirect' with the actual name of your redirect view
    else:
        form = ITRequestForm()

    return render(request, 'your_app/main.html', {'form': form})

def redirect(request):
    return render(request, 'redirect.html')

def status(request):
    return render(request, 'status.html')

def admin_main(request):
    
    return render(request, 'admin_main.html')

def admin_main_view(request):
    return render(request, 'admin_main.html')

def admin_main(request):
    return redirect('login')

def admin_request(request):   
     return render(request, 'admin_request.html')

def admin_request_view(request):
    return render(request, 'admin_request.html')

def admin_redirect(request):
    # Logic or processing can be added here if needed
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



    

from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('login/', views.login, name='login'),
    path('loading/', views.loading, name='loading'),
    path('main/', views.main, name='main'),
    path('redirect/', views.redirect, name='redirect'),
    path('status/', views.status, name='status'),
    path('admin/main/', views.admin_main, name='admin_main'),
    path('admin_main/', views.admin_main, name='admin_main'),
    path('admin/request/', views.admin_request, name='admin_request'),
    path('admin_request/', views.admin_request, name='admin_request'),
    path('create_ticket/', views.create_ticket, name='create_ticket'),
    path('view_tickets/', views.view_tickets, name='view_tickets'),
    path('login/', views.login, name='login'),  # URL for login page
    path('admin/main/', views.admin_main, name='admin_main'),
    path('admin/request/', views.admin_request, name='admin_request'),
    path('admin/request/admin_main/', views.admin_main, name='admin_main'),
    path('loading/', views.loading, name='loading'),  # URL for loading page
    path('login/admin_main.html', views.admin_main_view, name='admin_main'),
    path('login/admin_request.html', views.admin_request, name='admin_request'),
    path('loading/', views.loading, name='loading'),
    path('admin/request/admin_main.html', views.admin_redirect, name='admin_main'),
]# + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    # Add more URL patterns as needed
handler404 = 'Ticket.views.custom_404_error_view'

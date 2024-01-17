from django.contrib import admin
from .models import YourModel, Tickets, TicketNotes, LoginAttempt, CustomUser

admin.site.register(YourModel)
admin.site.register(Tickets)
admin.site.register(TicketNotes)
admin.site.register(LoginAttempt)

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'is_active', 'is_staff']  

    def __str__(self):
        return f"Login attempts for {self.username}"

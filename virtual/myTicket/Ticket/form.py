from django import forms
from .models import ITRequest

class ITRequestForm(forms.ModelForm):
    class Meta:
        model = ITRequest
        fields = '__all__'

class TicketForm(forms.ModelForm):
    class Meta:
        model = Ticket
        fields = ['title', 'description', 'admin_note', 'status']

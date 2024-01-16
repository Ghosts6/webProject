from django import forms
from .models import ITRequest

class ITRequestForm(forms.ModelForm):
    class Meta:
        model = ITRequest
        fields = '__all__'

from django import forms
from home.models import Vibe
class VibeForm(forms.ModelForm):
    class Meta:
        model = Vibe
        fields = '__all__'
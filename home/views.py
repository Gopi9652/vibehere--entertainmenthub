from django.shortcuts import render
from home import forms
from home import models
# Create your views here.
def base(request):
    return render(request, 'base.html')
def home(request):
    return render(request, 'home.html')
def audio(request):
    return render(request, 'audio.html')
def video(request):
    return render(request, 'video.html')
def upcoming(request):
    return render(request, 'upcoming.html')
def login(request):
    obj=forms.VibeForm()
    data=False
    if request.method=='POST':
        obj=forms.VibeForm(request.POST)
        if obj.is_valid():
            data=True
            obj.save()
            return render(request,'success.html',{'form':obj,'data':data})
    return render(request,'login.html',{'form':obj})



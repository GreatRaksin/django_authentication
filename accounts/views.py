from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.conf import settings
from .forms import LoginForm, SignupForm, UserUpdateForm
from .models import UserProfile


# Create your views here.


def user_login(request):
    form = LoginForm()
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username,
                                password=password)
            if user:
                login(request, user)
                return redirect('profile')
    return render(request, 'accounts/login.html',
                  {'form': form})


def user_signup(request):
    form = SignupForm()
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            password = form.cleaned_data['password1']
            user_instance = form.save()
            new_profile = UserProfile(
                user=user_instance,
                email=user_instance.email,
                first_name=user_instance.first_name,
                last_name=user_instance.last_name,
            )
            new_profile.save()
            subject = 'Регистрация'
            message = (f'Вы были зарегистрированы [сайт]\nЛогин {user_instance.username}'
                       f'\nПароль: {password}')
            #email_from = settings.EMAIL_HOST_USER
            #recipient_list = [settings.EMAIL_HOST_USER]
            # send_email()
            return redirect('login')
    return render(request, 'accounts/signup.html', {'form': form})


def user_logout(request):
    logout(request)
    return redirect('login')


def user_profile(request):
    return render(request)


def user_profile_update(request):
    return render(request)

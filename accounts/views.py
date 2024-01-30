from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.conf import settings
from .forms import LoginForm, SignupForm, UserUpdateForm, ReviewForm
from .models import UserProfile, ReviewsRating
from django.contrib import messages
from django.http import JsonResponse


def user_login(request):
    form = LoginForm()
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)

            if user:
                login(request, user)
                return redirect('profile')
            else:
                messages.error(request, 'Вы ввели неверные данные!')
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
            message = f'Вы были зарегистрированы [сайт]\nЛогин {user_instance.username}\nПароль: {password}'
            # email_form = settings.EMAIL_HOST_USER
            # recipient_list = [settings.EMAIL_HOST_USER]
            # send_email()
            return redirect('login')
    return render(request, 'accounts/siqnup.html', {'form': form})


def user_profile(request):
    return render(request, 'index/main.html')


def user_profile_check(request):
    profile = UserProfile.objects.get(user=request.user)
    return render(request, 'accounts/profile.html', {'profile': profile})


def user_profile_update(request):
    try:
        profile = UserProfile.objects.get(user=request.user)
        form = UserUpdateForm(instance=profile)
    except:
        messages.error(request, 'Вы не вошли в аккаунт!')
        return redirect('login')
    if request.method == "POST":
        form = UserUpdateForm(request.POST, instance=profile)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.save()
            return redirect('profile')
    return render(request, 'accounts/edit_profile.html',
                  {'form':form})


def user_loqout(request):
    logout(request)
    return redirect('profile')


def submit_review(request):
    url = request.META.get('HTTP_REFERER')
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            data = form.save(commit=False)
            review = ReviewsRating(
                user=request.user,
                subject=data.subject,
                review=data.review,
                rating=data.rating,
            )
            review.save()
            messages.success(request, 'Спасибо за отзыв!')
            return redirect('reviews_list')
        else:
            messages.error(request, 'Исправьте ошибки в форме')
    return render(request, 'reviews/reviews.html')


def reviews_list(request):
    reviews = ReviewsRating.objects.all()
    return render(request, 'reviews/reviews_index.html', {'reviews': reviews})


from django.core.exceptions import ValidationError
from django.views import View
from django.utils.http import urlsafe_base64_decode
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, get_user_model
from .forms import LoginForm, SignupForm, UserUpdateForm, ReviewForm
from .models import UserProfile, ReviewsRating
from django.contrib import messages
from .utils import send_email_for_verify
from django.contrib.auth.tokens import default_token_generator as token_generator

User = get_user_model()


class EmailVerify(View):
    def get(self, request, uid64, token):
        user = self.get_user(uid64)
        if user is not None and token_generator.check_token(user, token):
            user.email_verify = True
            login(request, user)
            return redirect('home')
        return redirect('invalid_verify')

    @staticmethod
    def get_user(uid64):
        try:
            uid = urlsafe_base64_decode(uid64).decode()
            user = UserProfile.objects.get(user_id=uid)
        except(TypeError, ValueError, OverflowError, UserProfile.DoesNotExist):
            user = None
        return user


def user_login(request):
    form = LoginForm()
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            profile = UserProfile.objects.get(user_id=user)
            if not profile.email_verified:
                send_email_for_verify(request, user)
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
            send_email_for_verify()
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


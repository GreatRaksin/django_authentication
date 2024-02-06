from django.urls import path
from django.views.generic import TemplateView
from . import views


urlpatterns = [
    path('login/', views.user_login, name='login'),
    path('signup/', views.user_signup, name='register'),
    path('loqout/', views.user_loqout, name='loqout'),
    path('confirm-email/', TemplateView.as_view(
        template_name='accounts/confirm_email.html'),
         name='confirm_email'),
    path('verify_email/<uid64>/<token>/', views.EmailVerify.as_view(), name='verify_email'),
    path('invalid_verify/', TemplateView.as_view(
        template_name='accounts/invalid_verify.html',
    ), name='invalid_verify'),
    path('user-profile/', views.user_profile, name='profile'),
    path('update-profile/', views.user_profile_update, name='change-profile'),
    path('user-profile_check/', views.user_profile_check, name='user_profile_check'),
    path('user-review/', views.submit_review, name='submit_review'),
    path('reviews/', views.reviews_list, name='reviews_list'),
]
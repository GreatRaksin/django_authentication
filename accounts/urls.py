from django.urls import path
from . import views


urlpatterns = [
    path('login/', views.user_login, name='login'),
    path('signup/', views.user_signup, name='register'),
    path('loqout/', views.user_loqout, name='loqout'),
    path('user-profile/', views.user_profile, name='profile'),
    path('update-profile/', views.user_profile_update, name='change-profile'),
    path('user-profile_check/', views.user_profile_check, name='user_profile_check'),
    path('user-review/', views.submit_review, name='submit_review'),
    path('reviews/', views.reviews_list, name='reviews_list'),
]
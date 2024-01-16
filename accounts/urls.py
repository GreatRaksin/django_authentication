from django.urls import path
from . import views


urlpatterns = [
    path('login/', views.user_login, name='login'),
    path('signup/', views.user_signup, name='register'),
    path('logout/', views.user_logout, name='logout'),
    path('user-profile/', views.user_profile, name='profile'),
    path('update-profile/', views.user_profile_update, name='change-profile'),
]


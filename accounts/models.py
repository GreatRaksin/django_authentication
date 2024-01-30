from django.db import models
from django.contrib.auth.models import User, AbstractUser
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField('Email', unique=True)
    first_name = models.CharField('Имя',max_length=100)
    last_name = models.CharField('Фамилия', max_length=100)
    balance = models.DecimalField(max_digits=1000, decimal_places=2, default=0)
    tg_link = models.URLField('Ссылка на телеграм', blank=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name} | {self.user.username}'

    class Meta:
        verbose_name = 'Аккаунт'
        verbose_name_plural = 'Аккаунты'
        ordering = ['email', 'balance']


class ReviewsRating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='пользователь', default='')
    subject = models.CharField(max_length=100, blank=True)
    review = models.TextField(max_length=500, blank=True)
    rating = models.IntegerField()
    ip = models.CharField(max_length=20, blank=True)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.user}'

    class Meta:
        verbose_name = 'Рейтинг'
        verbose_name_plural = 'Рейтинги'
        ordering = ['user', 'rating', 'subject']


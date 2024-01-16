from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField('Email', unique=True)
    first_name = models.CharField('Имя', max_length=100)
    last_name = models.CharField('Фамилия', max_length=100)
    balance = models.DecimalField('Баланс', max_digits=1000, decimal_places=2, default=0)
    tg_link = models.URLField('Ссылка на телеграм', blank=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name} | {self.user.username}'

    class Meta:
        verbose_name = 'Аккаунт'
        verbose_name_plural = 'Аккаунты'
        ordering = ['email', 'balance']
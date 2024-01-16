from django.contrib import admin
from .models import UserProfile
# Register your models here.


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'email', 'balance')
    search_fields = ('email', 'user__username',)


admin.site.register(UserProfile, UserProfileAdmin)

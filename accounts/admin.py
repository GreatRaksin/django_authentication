from django.contrib import admin
from .models import UserProfile, ReviewsRating


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'email', 'balance')
    search_fields = ('email', 'user__username')


class UserReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'review', 'rating')


admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(ReviewsRating, UserReviewAdmin)



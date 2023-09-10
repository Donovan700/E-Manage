from django.contrib import admin
from BackApp.models import User,Categorie,Depense

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    pass
admin.site.register(User,UserAdmin)

class CategorieAdmin(admin.ModelAdmin):
    pass
admin.site.register(Categorie,CategorieAdmin)

class DepenseAdmin(admin.ModelAdmin):
    pass
admin.site.register(Depense,DepenseAdmin)
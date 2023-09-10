from django.urls import path
from BackApp.views import *


urlpatterns = [
    path('',home),
    #Users path
    path('add/user',UserAdd.as_view()),
    path('user',UserShow.as_view()),
    path('edit/user/<int:pk>',UserUpdate.as_view()),
    path('user/<int:pk>',UserDelete.as_view()),
    #Categories path
    path('add/categorie',CategorieAdd.as_view()),
    path('categorie',CategorieShow.as_view()),
    path('edit/categorie/<int:pk>',CategorieUpdate.as_view()),
    path('categorie/<int:pk>',CategorieDelete.as_view()),
    #Depenses path
    path('add/depense',DepenseAdd.as_view()),
    path('depense',DepenseShow.as_view()),
    path('edit/depense/<int:pk>',DepenseUpdate.as_view()),
    path('depense/<int:pk>',DepenseDelete.as_view())
]

from django.contrib import admin
from django.urls import path
from .views import login, index, users, positions, own_forms, okved, clients_cat, clients

urlpatterns = [
    path('login', login),
    path('', index),
    path('users', users),
    path('positions', positions),
    path('own_forms', own_forms),
    path('okved', okved),
    path('clients_cat', clients_cat),
    path('clients', clients),
]

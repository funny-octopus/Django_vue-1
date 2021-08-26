from django.shortcuts import render
from django.http import HttpResponse


def login(request):
    return render(request, "login.html")


def index(request):
    return render(request, "index.html")


def users(request):
    return render(request, "users.html")


def positions(request):
    data={'text':'Тут должен быть список должностей'}
    return render(request, "blank.html", context=data)


def own_forms(request):
    data={'text':'Тут должен быть список форм собственности'}
    return render(request, "blank.html", context=data)


def okved(request):
    data={'text':'Тут должен быть список okved'}
    return render(request, "blank.html", context=data)


def clients_cat(request):
    data={'text':'Тут должен быть список категорий клиентов'}
    return render(request, "blank.html", context=data)


def clients(request):
    data={'text':'Тут должен быть список клиентов'}
    return render(request, "blank.html", context=data)

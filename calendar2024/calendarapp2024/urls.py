from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('chatbot/', views.chatbot, name='chatbot'),
]

from django.shortcuts import render

def main(request):
    return render(request, 'calendarapp2024/main.html')

def chatbot(request):
    return render(request, 'calendarapp2024/chatbot.html')

from django.shortcuts import render

def main(request):
    return render(request, 'main.html')

def chatbot(request):
    return render(request, 'chatbot_page.html')

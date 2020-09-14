from django.shortcuts import render

# Create your views here.
def piggame(request):
    return render(request,"testapp/piggame.html")

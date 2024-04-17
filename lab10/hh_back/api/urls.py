from django.urls import path
from django.views.generic import RedirectView

from . import views

urlpatterns = [

    path('companies/', views.companies),
    path('companies/<int:pk>/', views.company_details),
    path('vacancies/', views.vacancies.as_view()),
    path('vacancies/<int:pk>/', views.vacancy_details.as_view()),
    path('companies/<int:pk>/vacancies/', views.company_vacancies),
    
]

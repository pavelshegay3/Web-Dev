from django.http import JsonResponse, Http404
from django.shortcuts import render, HttpResponse, get_object_or_404, redirect

from .models import Company, Vacancy

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import CompanySerializer, VacancySerializer

@api_view(['GET', 'POST'])
def companies(request):
  if request.method == 'GET':
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

  elif request.method == 'POST':
    serializer = CompanySerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def company_details(request, pk):
    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def company_vacancies(request, pk):
  vacancies = Vacancy.objects.filter(company_id=pk)
  serializer = VacancySerializer(vacancies, many=True)
  return Response(serializer.data)


# Class-based views for Vacancy
class vacancies(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class vacancy_details(APIView):
    def get_object(self, pk):
        try:
            return Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, pk):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Views from lab 9
# Create your views here.
'''
def home(request):
  return render(request, 'home.html')
def companies(request):
  companies = Company.objects.all()
  return render(request,  'companies.html', {"companies": companies})

def companies_api(request):
  companies = Company.objects.all()
  data = {'companies': list(companies.values())}
  return JsonResponse(data)

def company_details(request, id):
  company = get_object_or_404(Company, id=id)
  return render(request, 'company_details.html', {"company": company})

def company_details_api(request, id):
  company = get_object_or_404(Company, id=id)
  data = {'company': {
    'name': company.name,
    'description': company.description,
    'city': company.city,
    'address': company.address
  }}
  return JsonResponse(data)
def company_vacancies(request, id):
  company = get_object_or_404(Company, id=id)
  vacancies = company.vacancies.all()
  title = 'Vacancies of ' + company.name
  return render(request, 'vacancies.html', {'vacancies': vacancies, 'title':title})

def company_vacancies_api(request, id):
  company = get_object_or_404(Company, id=id)
  vacancies = company.vacancies.all()
  data = {'vacancies': list(vacancies.values())}
  return JsonResponse(data)
def vacancies(request):
  vacancies = Vacancy.objects.all()
  title = "All vacancies"
  return render(request, 'vacancies.html', {"vacancies": vacancies, "title": title})

def vacancies_api(request):
  vacancies = Vacancy.objects.all()
  data = {'vacancies': list(vacancies.values())}
  return JsonResponse(data)
def vacancy_details(request, id):
  vacancy = get_object_or_404(Vacancy, id=id)
  return render(request, "vacancy_details.html", {"vacancy": vacancy})

def vacancy_details_api(request, id):
  vacancy = get_object_or_404(Vacancy, id=id)
  data = {'vacancy': {
    'name': vacancy.name,
    'description': vacancy.description,
    'salary': vacancy.salary,
    'company': {
      'name': vacancy.company.name
    }
  }}
  return JsonResponse(data)
def top_ten_vacancies(request):
  vacancies = Vacancy.objects.order_by('-salary')[:10]
  title = "Top ten vacancies"
  return render(request, "vacancies.html", {"vacancies": vacancies, "title": title})

def top_ten_vacancies_api(request):
  vacancies = Vacancy.objects.order_by('salary')[:10]
  vacancy_data = []
  for vacancy in vacancies:
    vacancy_data.append({
      'name': vacancy.name,
      'description': vacancy.description,
      'salary': vacancy.salary,
      'company': {
        'name': vacancy.company.name
      }
    })
  data = {'vacancies': vacancy_data}
  return JsonResponse(data)
'''
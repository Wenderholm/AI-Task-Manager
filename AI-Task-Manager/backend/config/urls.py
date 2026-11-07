from django.contrib import admin
from django.urls import path, include
from apps.tasks.auth_views import csrf

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/tasks/", include("apps.tasks.urls")),
    path("api-auth/", include("rest_framework.urls")),
    path("csrf/", csrf),
    path("api/csrf/", csrf),
]
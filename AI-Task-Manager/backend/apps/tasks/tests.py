import pytest
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from rest_framework import status

from .models import Task


@pytest.mark.django_db
def test_authenticated_user_can_create_task():
    user = User.objects.create_user(
        username="testuser",
        password="testpassword123"
    )

    client = APIClient()
    client.force_authenticate(user=user)

    response = client.post(
        "/api/tasks/",
        {
            "title": "Learn Django REST Framework",
            "description": "Create my first API",
            "priority": "HIGH",
            "status": "TODO",
        },
        format="json",
    )

    assert response.status_code == status.HTTP_201_CREATED
    assert Task.objects.filter(user=user).count() == 1


@pytest.mark.django_db
def test_user_cannot_see_another_users_tasks():
    user1 = User.objects.create_user(username="user1")
    user2 = User.objects.create_user(username="user2")

    Task.objects.create(
        user=user1,
        title="Private task",
    )

    client = APIClient()
    client.force_authenticate(user=user2)

    response = client.get("/api/tasks/")

    assert response.status_code == status.HTTP_200_OK
    assert response.data == []
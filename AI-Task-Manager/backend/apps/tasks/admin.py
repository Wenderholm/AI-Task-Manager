from django.contrib import admin
from .models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "user",
        "status",
        "priority",
        "due_date",
        "created_at",
    )

    list_filter = (
    "status",
    "priority",
    "user",
    "due_date",
)

    search_fields = ("title", "description")

    ordering = ("-created_at",)
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core.views import CycleViewSet, BranchViewSet
from transport.views import BusRouteViewSet

router = DefaultRouter()
router.register(r'cycles', CycleViewSet)
router.register(r'branches', BranchViewSet)
router.register(r'bus-routes', BusRouteViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

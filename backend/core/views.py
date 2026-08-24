from rest_framework import viewsets
from backend.academics.models import Cycle, Branch
from .serializers import CycleSerializer, BranchSerializer

class CycleViewSet(viewsets.ModelViewSet):
    queryset = Cycle.objects.all()
    serializer_class = CycleSerializer

class BranchViewSet(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

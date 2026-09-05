from rest_framework import serializers
from academics.models import Cycle, Branch

class CycleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cycle
        fields = '__all__'

class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'

from django.shortcuts import render
from rest_framework import generics, mixins
from rest_framework.permissions import *
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from api.models import *
from django.contrib.auth.models import User
from api.serializers import *

# class UserDetailViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

class get_photo_detail(APIView):
    def get_object(self, album_pk, photo_pk):
        try:
            return Album.objects.get(id=album_pk).albums.get(id=photo_pk)
        except Photo.DoesNotExist as e:
            raise Http404

    def get(self, request, album_pk, photo_pk):
        photo = self.get_object(album_pk, photo_pk)
        serializer = PhotoSerializer(photo)
        return Response(serializer.data)

    def delete(self, request, album_pk, photo_pk):
        photo = self.get_object(album_pk, photo_pk)
        photo.delete()
        return Response({'message': 'deleted'}, status=204)


@api_view(['GET', 'POST'])
def get_users_albums(request):
    if request.method == 'GET':
        albums = Album.objects.filter()
        serializer = AlbumSerializer(albums, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AlbumSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def get_photos_from_album(request, pk):
    try:
        album = Album.objects.get(id=pk)
        photos = Photo.objects.filter(album_id=pk)
    except Photo.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == 'GET':
        serializer = PhotoSerializer(photos, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PhotoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "PUT":
        serializer = AlbumSerializer(instance=album, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == "DELETE":
        album.delete()
        return Response({'message': 'deleted'}, status=204)


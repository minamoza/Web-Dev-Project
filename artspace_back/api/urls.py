from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token

from api.views import *

urlpatterns = [
    # Work In Progress
    # path('', views.IndexView.as_view(), name='index'),
    path('login/', obtain_jwt_token),
    path('users/<int:pk>', UserDetailAPIView.as_view()),
    # path('users/', UserViewSet)
    # path('home/', views.?????.as_view(), name='home'),
    # path('categories/', views.?????.as_view(), name='categories'),
    # path('<int:pk>/', views.?????.as_view(), name='userDetail'),
    # path('<int:pk>/follows/', views.?????.as_view(), name='userFollowsList'),
    path('albums/', get_users_albums),
    # path('<int:pk>/albums/<int:pk>/', views.?????.as_view(), name='userAlbumDetail'),
    path('albums/<int:pk>/photo/', get_photos_from_album),
    path('albums/<int:album_pk>/photo/<int:photo_pk>/', get_photo_detail.as_view()),
    # path('<int:pk>/settings/', views.?????.as_view(), name='userSettingList'),
]
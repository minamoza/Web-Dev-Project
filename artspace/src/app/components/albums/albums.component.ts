import {Component, OnInit, TemplateRef} from '@angular/core';
import {Album, Photo, User} from '../../models';
import {ActivatedRoute} from '@angular/router';
import {AlbumsService} from '../../albums.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  user!: User;
  albums!: Album[];
  album!: Album;
  albumId!: number;
  photos!: Photo[];
  loaded!: boolean;
  newAlbum: number;
  modalRef!: BsModalRef;

  constructor(private albumsService: AlbumsService,
              private route: ActivatedRoute,
              private modalService: BsModalService) {
    // @ts-ignore
    this.newAlbum = null;
  }

  ngOnInit(): void {
    this.getAlbums();
    this.getPhotos();
  }
  getAlbums(): void {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
      this.album = albums[0];
    });
  }
  getPhotos(): void {
    // @ts-ignore
    this.route.paramMap.subscribe((x) => this.albumId = +x.get('id'));
    this.albumsService.getPhotos(this.albumId).subscribe((photos) => {
      this.photos = photos;
    });
  }
  deleteAlbum(id: number): void {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted', id);
    });
  }


}


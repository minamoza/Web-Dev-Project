import { Component, OnInit } from '@angular/core';
import {Album} from '../../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loaded!: boolean;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) { }

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.album = ALBUMS.find((x) => x.id === id);
    // this.route.paramMap.subscribe((params) => {
    //   const id = +params.get('id');
    //   this.album = ALBUMS.find((x) => x.id === id);
    // });
    this.getAlbum();
  }
  getAlbum(): void {
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }
  goBack(): void {
    this.location.back();
  }
  updateAlbum(): void {
    this.loaded = false;
    this.albumsService.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    });
  }
}

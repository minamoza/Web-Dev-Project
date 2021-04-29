import {Component, OnInit, TemplateRef} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../user.service';
import { AlbumsService} from '../../albums.service';

import {Album, User} from '../../models';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  modalRef!: BsModalRef;
  newAlbum!: any;
  albums!: Album[];
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private albumService: AlbumsService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

}

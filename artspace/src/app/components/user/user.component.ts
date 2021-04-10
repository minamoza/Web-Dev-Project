import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User } from '../../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    //this is just for testing, I didn't create actual user database and user service because
    //I expect us to do that when we start working on backend - Shayakhmet
    this.user = {
      id: 1,
      photo: "https://yt3.ggpht.com/ytc/AAUvwniOmzeSbOblg-nQOLNXwi2YuKSCBh34Ytj_ZPWYnQ=s900-c-k-c0x00ffffff-no-rj",
      name: "myUser",
      password: "myPassword"
    }
   }

  ngOnInit(): void {
    // this.user$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.userService.getUser(params.get('name')))
    // );
  }

}

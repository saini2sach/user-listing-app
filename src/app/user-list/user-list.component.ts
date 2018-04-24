import { Component, OnInit } from '@angular/core';
import { GIT_USERS } from "../mock-user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = GIT_USERS;
  constructor() { }

  ngOnInit() {
  }
  sortList() {
    let initialArr = GIT_USERS;
        
    const sortArr = initialArr.sort((a, b) => {
      if (a.age > b.age) { return 1; }
      if (a.age < b.age) { return -1; }
      return 0;
    });

    this.users = sortArr;
  }

}

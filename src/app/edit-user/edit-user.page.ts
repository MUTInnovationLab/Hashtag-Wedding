import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {
  user = {
    name: '',
    surname: '',
    country: '',
    email:'',
    phone:'',
    gender:''

    // Other profile fields here
  };
  constructor() { }

  ngOnInit() {
  }
  saveProfile() {
    // Implement the logic to save profile changes
  }
}

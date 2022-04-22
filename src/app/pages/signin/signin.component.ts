import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  public user = {
    username: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  loginFormSubmit() {
    console.log(this.user);
  }
}

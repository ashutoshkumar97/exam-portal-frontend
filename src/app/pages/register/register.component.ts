import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // user fields must match with ur backend POJO's properties
  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  constructor() {}

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null)
      alert('Username is required');
  }
}

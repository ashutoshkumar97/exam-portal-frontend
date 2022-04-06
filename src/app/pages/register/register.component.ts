import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/register.service';

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
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null)
      alert('Username is required');

    // call userService method : addUser and pass this.user object as argument
    this.userService.addUser(this.user).subscribe(
      (data) => {
        // for success
        console.log(data);
        alert('success');
      },
      (err) => {
        // for failure
        alert('failed to add user');
      }
    );
  }
}

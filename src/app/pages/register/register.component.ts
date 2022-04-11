import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/register.service';
import Swal from 'sweetalert2';

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
  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      // alert('Username is required');
      this._snackBar.open('Username is required', '', { duration: 3000 });
      return;
    }

    // call userService method : addUser and pass this.user object as argument
    this.userService.addUser(this.user).subscribe(
      (data) => {
        // for success
        console.log(data);
        Swal.fire('Success', 'User is registered successfully', 'success');
      },
      (err) => {
        // for failure
        alert('failed to add user');
      }
    );
  }
}

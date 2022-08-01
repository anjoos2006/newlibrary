import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../signup/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title: String = "Please Register";
  ausers = new UserModel('','','','');
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  Adduser(){
    this.userService.newUsers(this.ausers);
    console.log("Called");
    console.log("this.ausers.name");
    console.log(this.ausers.name);
    alert("Success");
    this.router.navigate(['/userlogin']);

}
}

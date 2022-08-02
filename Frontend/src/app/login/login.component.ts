import { Component, OnInit } from '@angular/core';
// import { UserModel } from '../signup/user.model';
import { Router } from '@angular/router';
import { UserModel } from '../signup/user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {
    "username":'',
    "password":''

  };
  ruser = new UserModel(null!,null!,null!,null!)
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  usercheck(){
    console.log("this.user");
    console.log(this.user);
     this.userService.userLogin(this.user)
        .subscribe(
          res =>{
            console.log("res is",res)
            // console.log("res.token is",res.token)
            localStorage.setItem('token',res)
            this.router.navigate(['/books'])
          }
        )
  }

}


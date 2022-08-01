import { Component, OnInit } from '@angular/core';
import { UserModel } from '../signup/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = new UserModel(null!,null!,null!,null!);
  constructor() { }

  ngOnInit(): void {
  }
  usercheck(){

  }

}

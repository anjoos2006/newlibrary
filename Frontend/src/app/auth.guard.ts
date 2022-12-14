import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:UserService, private _router:Router){}
  canActivate():boolean{
    if (this._auth.loggedIn() ) {
      return true
    }
    else{
      this._router.navigate(['books'])
      return false;
    }
  }
  
}

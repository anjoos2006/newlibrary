import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  newUsers(nuser: any) {
    console.log("nuser")
    console.log(nuser)
    return this.http.post("http://localhost:3000/users/signup", { "User": nuser })
      .subscribe(data => { console.log(data) })
  }
}

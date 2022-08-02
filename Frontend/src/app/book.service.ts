import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  server_address: string = 'api';
  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get<any>(`${this.server_address}/books`)
  }
  newBooks(nbook: any) {
    return this.http.post<any>(`${this.server_address}/books/add`, { "Book": nbook })
      .subscribe(data => { console.log(data) })
  }
  delBook(id:any)
  {
    return this.http.delete<any>(`${this.server_address}/books/remove/`+id)
  }
  getBook(id:any){
    return this.http.get<any>(`${this.server_address}/books/`+id)
  }
  edBook(book:any){
    console.log("Book update");
    return this.http.put<any>(`${this.server_address}/books/update/`,book)
    .subscribe(data => {console.log(data)})
  }
}

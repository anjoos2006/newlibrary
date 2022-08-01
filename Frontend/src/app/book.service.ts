import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get("http://localhost:3000/books")
  }
  newBooks(nbook: any) {
    return this.http.post("http://localhost:3000/books/add", { "Book": nbook })
      .subscribe(data => { console.log(data) })
  }
  delBook(id:any)
  {
    return this.http.delete("http://localhost:3000/books/remove/"+id)
  }
  getBook(id:any){
    return this.http.get("http://localhost:3000/books/"+id)
  }
  edBook(book:any){
    console.log("Book update");
    return this.http.put("http://localhost:3000/books/update/",book)
    .subscribe(data => {console.log(data)})
  }
}

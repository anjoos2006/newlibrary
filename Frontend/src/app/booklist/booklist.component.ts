import { Component, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  title:String = "List of books";
  rbooks: BookModel[] =[];
    
  constructor(private bookservice: BookService,private router: Router) { }

  ngOnInit(): void {
    this.bookservice.getBooks().subscribe((data)=>{
      console.log("data")
      console.log(data);
    this.rbooks = JSON.parse(JSON.stringify(data));
      console.log("results1")
      console.log(this.rbooks);
      console.log(this.rbooks[0]);
      console.log(this.rbooks[0].title);
    });
    console.log("results2")
    console.log(this.rbooks);
  }
  deleteBook(book:any){ 
    console.log("In deleteBook")
    console.log(book._id)
    this.bookservice.delBook(book._id)
      .subscribe((data) => {
        this.rbooks = this.rbooks.filter(p => p !== book);
      })

   };
   editBook(book:any){
    localStorage.setItem("editBookId",book._id.toString());
    this.router.navigate(['update']);
   }

}

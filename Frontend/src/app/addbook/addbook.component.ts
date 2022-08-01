import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../booklist/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title: String = "Add a book";
  abooks = new BookModel(null!,null!,null!,null!,null!);

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }
  Addbook(){
    this.bookService.newBooks(this.abooks);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/books']);
    
  }

}

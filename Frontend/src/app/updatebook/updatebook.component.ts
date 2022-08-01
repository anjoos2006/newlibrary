import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../booklist/book.model';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  title:String = "Please make the changes";
  rbooks = new BookModel(null!,null!,null!,null!,null!);

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.rbooks = JSON.parse(JSON.stringify(data));
    })
  }
  editBook(){
    this.bookService.edBook(this.rbooks);
    localStorage.removeItem("editBookId")
    alert("success");
    this.router.navigate(['/books'])
  }


}

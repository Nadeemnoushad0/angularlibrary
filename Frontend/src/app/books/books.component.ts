import { Component, OnInit } from '@angular/core';
import { Books } from './books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    book: Books[];
  constructor(private booksService: BooksService) { 
      this.book = [];
  }

  ngOnInit(): void {
      this.booksService.getbooks().subscribe((data)=>{
          this.book=JSON.parse(JSON.stringify(data));
      })
  }

}

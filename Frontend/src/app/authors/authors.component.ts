import { Component, OnInit } from '@angular/core';
import { Authors } from './authors.model';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

    author: Authors[];
    constructor(private authorService: AuthorsService) { 
        this.author = [];
    }

    ngOnInit(): void {
        this.authorService.getauthors().subscribe((data)=>{
            this.author=JSON.parse(JSON.stringify(data));
        })
    }

}

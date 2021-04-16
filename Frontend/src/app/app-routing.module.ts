import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'books',component:BooksComponent},
                        {path:'authors',component:AuthorsComponent},
                        {path:'addbook',component:AddbookComponent},
                        {path:'addauthor',component:AddauthorComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

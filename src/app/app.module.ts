import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ɵAPP_ROOT } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import {  BooksService} from './services/books.service';
import { AuthGuardService } from './services/AuthGuardService';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule,
ReactiveFormsModule,
HttpClientModule,
RouterModule
  
  ],
  providers: [AuthService, BooksService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authenAngular';
  constructor(){
    const config = {
    apiKey: "AIzaSyDfnv2bNQ66YZd3mJ51lC8-U7VtZpEN_BU",
    authDomain: "authenangular-73191.firebaseapp.com",
    databaseURL: "https://authenangular-73191.firebaseio.com",
    projectId: "authenangular-73191",
    storageBucket: "",
    messagingSenderId: "804453678046",
    appId: "1:804453678046:web:f12fa7a6ddbc2b05"
  };
  firebase.initializeApp(config);
}
}
  




import { Component, OnInit } from '@angular/core';
import { WATCH_LIST } from './DATA';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private title: Title
  ){  }

  ngOnInit(){
    this.title.setTitle('Film List');
    
    console.log(this.watchList);

  }

  watchList = WATCH_LIST

}

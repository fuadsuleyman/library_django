import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styleUrls: ['./watch-list-item.component.css']
})
export class WatchListItemComponent implements OnInit {

  temp: object;
  show = 4;
  showFlag = false;
  buttonText = 'Show All';
  // buttonTextLess = 'Show Less';
  @Input() items;
  constructor(public title: Title) {
    this.title.setTitle('Film List')
  }

  ngOnInit(): void {
  }

  onUpSwap(index){
    this.temp = this.items[index];
    this.items[index] = this.items[index+1];
    this.items[index+1] = this.temp;

  }

  onDownSwap(index){
    this.temp = this.items[index];
    this.items[index] = this.items[index-1];
    this.items[index-1] = this.temp;
    console.log(index);
  }

  showAll(){
    this.showFlag = !this.showFlag;
    if(!this.showFlag){
      this.show = 4;
      this.buttonText = 'Show All';
    } else {
      this.show = this.items.length;
      this.buttonText = 'Show Less';
    }
  }

}

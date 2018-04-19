import { Component, ViewChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('myBtn') myBtn:HTMLButtonElement;
  title = 'app';
  ngAfterContentInit(){
    console.log(this.myBtn);
  }
  handleClick(){
    console.log(this.myBtn);
  }
}

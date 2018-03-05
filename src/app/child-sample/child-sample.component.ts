import { Component, OnInit, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child-sample',
  templateUrl: './child-sample.component.html',
  styleUrls: ['./child-sample.component.css']
})
export class ChildSampleComponent implements OnInit {

  @ContentChild('injectedTemplate') 
  public injectedTemplate:TemplateRef<any>;

  @ContentChild('anotherTemplate') 
  public anotherTemplate:TemplateRef<any>;

  constructor() { }
  public human = {name:'Batman', age:27};
  ngOnInit() {
  }

}

import { Component, OnInit, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-child-sample',
  templateUrl: './child-sample.component.html',
  styleUrls: ['./child-sample.component.css']
})
export class ChildSampleComponent implements OnInit {

  @ContentChild(TemplateRef)
  public injectedTemplate:TemplateRef<any>;

  constructor() { }
  public human = {name:'Batman', age:27};
  ngOnInit() {
  }

}

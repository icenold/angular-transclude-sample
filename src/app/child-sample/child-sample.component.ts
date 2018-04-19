import { Component, OnInit, TemplateRef, ContentChild } from '@angular/core';
import { TestHeaderTemplateDirective } from '../test-header-template.directive';
import { TestListTemplateDirective } from '../test-list-template.directive';

@Component({
  selector: 'app-child-sample',
  templateUrl: './child-sample.component.html',
  styleUrls: ['./child-sample.component.css']
})
export class ChildSampleComponent implements OnInit {

  @ContentChild(TestHeaderTemplateDirective, {read:TemplateRef})
  public headerTemplate;

  @ContentChild(TestListTemplateDirective, {read:TemplateRef})
  public listTemplate;

  constructor() { }
  public human = {name:'Batman', age:27};
  ngOnInit() {
  }

}

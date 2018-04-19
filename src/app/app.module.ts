import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildSampleComponent } from './child-sample/child-sample.component';
import { TestHeaderTemplateDirective } from './test-header-template.directive';
import { TestListTemplateDirective } from './test-list-template.directive';


@NgModule({
  declarations: [
    AppComponent,
    ChildSampleComponent,
    TestHeaderTemplateDirective,
    TestListTemplateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptorInterceptor } from 'src/interceptor/my-interceptor.interceptor';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { WebWorkerComponent } from './web-worker/web-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    NavbarComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ParentComponent,
    ChildComponent,
    WebWorkerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { HttpClientModule } from '@angular/common/http';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FirstChildComponent,
    EmplistComponent,
    EmpdetailComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

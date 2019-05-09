import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent }   from './landing/landing.component';
import { EmplistComponent }      from './emplist/emplist.component';
import { EmpdetailComponent }  from './empdetail/empdetail.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: LandingComponent },
  { path: 'detail/:id', component: EmpdetailComponent },
  { path: 'emps', component: EmplistComponent },
  {path: 'newreg', component:RegistrationComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

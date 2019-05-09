import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = {
    firstName: 'New',
    lastName: 'User',
    role: 'Guest',
    notes: undefined
  };

  roles: Array<string> = [
    'Guest',
    'Admin',
    'Owner',
    'Operator'
  ];

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('userForm') userForm: FormGroup;
  logForm(){
    console.log(this.userForm.value);
  }

  logFormValue(){
    console.log(this.userForm.controls);
 }
  
   disableForm(){
     console.log(this.userForm.disabled)
    if (this.userForm.disabled) {
      console.log('need to enable')
    } else {
      this.userForm.enable();
    }
   }

  // enableForm(){
  //   this.userForm.enable();
  // }
}
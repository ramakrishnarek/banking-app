import { Component, OnInit, Input } from '@angular/core';
import { Emp } from '../emp';


@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {
  @Input() emp: Emp;
  constructor() { }

  ngOnInit() {
  }

}

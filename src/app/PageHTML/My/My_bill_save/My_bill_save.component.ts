import { element } from 'protractor';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-My_bill_save',
  templateUrl: './My_bill_save.component.html',
  styleUrls: ['./My_bill_save.component.css']
})
export class My_bill_saveComponent implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  checkbx: any = [];
  constructor() { }
  checksave(x, y) {
    let obj = x.getElementsByTagName('li');
    this.checkbx = [];
    for (let i = 0; i < obj.length; i++) {
      if (i == y) {
        this.checkbx[i] = true;
        console.log(i)
      } else {
        this.checkbx[i] = false;
      }
    }
  }
  change(x) {
    this.childEvent.emit(x);
  }
  ngOnInit() {
    let ulName = document.getElementById('savebox');
    this.checksave(ulName, 0);

  }

}

@Component({
  selector: 'billsave-header',
  templateUrl: './bill_header.html',
  styleUrls: ['./My_bill_save.component.css']
})
export class BillSaveHeader implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  change() {
    this.childEvent.emit(false);
  }
  ngOnInit() {
  }

}

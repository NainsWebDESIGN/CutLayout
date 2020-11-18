import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-My_bill_moneybag',
  templateUrl: './My_bill_moneybag.component.html',
  styleUrls: ['./My_bill_moneybag.component.css']
})
export class My_bill_moneybagComponent implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  @Output() cardEvent: EventEmitter<any> = new EventEmitter();

  bankcard: any = [];
  constructor() { }
  changecard() {
    this.cardEvent.emit(true);
  }
  change(x) {
    this.childEvent.emit(x);
  }
  check(x) {
    for (let i = 0; i < this.bankcard.length; i++) {
      if (i == x) {
        this.bankcard[i] = true;
      } else if (i !== x) {
        this.bankcard[i] = false;
      }
    }
  }
  ngOnInit() {
    let bankcard = 3;
    for (let i = 0; i <= (bankcard - 1); i++) {
      this.bankcard[i] = false;
    }
  }

}

@Component({
  selector: 'moneybag-header',
  templateUrl: './moneybag-header.html',
  styleUrls: ['./My_bill_moneybag.component.css']
})
export class MoneyBagHeader implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  change() {
    this.childEvent.emit(false)
  }

  ngOnInit() {
  }

}

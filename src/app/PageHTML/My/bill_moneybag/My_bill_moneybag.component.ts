import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-My_bill_moneybag',
  templateUrl: './My_bill_moneybag.component.html',
  styleUrls: ['./My_bill_moneybag.component.css']
})
export class My_bill_moneybagComponent implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  change(x) {
    this.childEvent.emit(x);
  }
  ngOnInit() {
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

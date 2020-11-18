import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bill_getcash',
  templateUrl: './bill_getcash.component.html',
  styleUrls: ['./bill_getcash.component.css']
})
export class Bill_getcashComponent implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  @Output() cardEvent: EventEmitter<any> = new EventEmitter();
  bankcard: any = [];
  btn = false;
  constructor() { }
  changecard() {
    this.cardEvent.emit(true);
  }
  change(x) {
    this.childEvent.emit(x);
  }
  Focus() {
    this.btn = true;
  }
  FocusOut() {
    this.btn = false;
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
  selector: 'getcash-header',
  templateUrl: './getcash_header.html',
  styleUrls: ['./bill_getcash.component.css']
})
export class GetCashHeader implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  change() {
    this.childEvent.emit(false)
  }

  ngOnInit() {
  }

}


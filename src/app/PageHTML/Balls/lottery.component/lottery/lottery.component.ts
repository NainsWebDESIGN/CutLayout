import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'lottery-header',
  templateUrl: './lottery-header.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryHeader implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 5;
  constructor() { }
  changeboolin(x) {
    if (x == 2) {
      this.popupEvent.emit(true);
    } else if (x !== 2) {
      this.popupEvent.emit(false);
    }
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      if (i == x) {
        this.boolin[i] = true;
      }
    }
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      this.boolin[0] = true;
    }
  }

}

@Component({
  selector: 'lottery-content',
  templateUrl: './lottery-content.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'lotteryresult',
  templateUrl: './lotteryresult.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
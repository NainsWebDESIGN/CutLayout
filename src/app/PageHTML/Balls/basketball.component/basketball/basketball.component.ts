import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.component.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'basketball-header',
  templateUrl: './basketball-header.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballHeader implements OnInit {
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
  selector: 'basketball-content',
  templateUrl: './basketball-content.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'basketbet',
  templateUrl: './basketbet.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketBet implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'basketresult',
  templateUrl: './basketresult.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'basketteach',
  templateUrl: './basketteach.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketTeach implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
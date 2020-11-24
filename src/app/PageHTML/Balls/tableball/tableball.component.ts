import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tableball',
  templateUrl: './tableball.component.html',
  styleUrls: ['./tableball.component.css']
})
export class TableballComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'tableball-header',
  templateUrl: './tableball-header.html',
  styleUrls: ['./tableball.component.css']
})
export class TableballHeader implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 4;
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
  selector: 'tableball-content',
  templateUrl: './tableball-content.html',
  styleUrls: ['./tableball.component.css']
})
export class TableballContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'tableball-right',
  templateUrl: './tableball-right.html',
  styleUrls: ['./tableball.component.css']
})
export class TableballRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'tableball-bet',
  templateUrl: './tableball-bet.html',
  styleUrls: ['./tableball.component.css']
})
export class TableballBet implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'tableball-result',
  templateUrl: './tableball-result.html',
  styleUrls: ['./tableball.component.css']
})
export class TableballResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
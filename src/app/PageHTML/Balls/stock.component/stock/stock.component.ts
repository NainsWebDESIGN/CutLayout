import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'stock-header',
  templateUrl: './stock-header.html',
  styleUrls: ['./stock.component.css']
})
export class StockHeader implements OnInit {
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
  selector: 'stock-content',
  templateUrl: './stock-content.html',
  styleUrls: ['./stock.component.css']
})
export class StockContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'stock-right',
  templateUrl: './stock-right.html',
  styleUrls: ['./stock.component.css']
})
export class StockRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'stbet',
  templateUrl: './stbet.html',
  styleUrls: ['./stock.component.css']
})
export class StBet implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'stresult',
  templateUrl: './stresult.html',
  styleUrls: ['./stock.component.css']
})
export class StResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
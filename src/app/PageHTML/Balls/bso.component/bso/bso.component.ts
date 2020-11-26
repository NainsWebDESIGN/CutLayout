import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bso',
  templateUrl: './bso.component.html',
  styleUrls: ['./bso.component.css']
})
export class BsoComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'bso-header',
  templateUrl: './bso-header.html',
  styleUrls: ['./bso.component.css']
})
export class BsoHeader implements OnInit {
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
  selector: 'bso-content',
  templateUrl: './bso-content.html',
  styleUrls: ['./bso.component.css']
})
export class BsoContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'bso-result',
  templateUrl: './bso-result.html',
  styleUrls: ['./bso.component.css']
})
export class BsoResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
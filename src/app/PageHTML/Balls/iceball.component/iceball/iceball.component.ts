import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-iceball',
  templateUrl: './iceball.component.html',
  styleUrls: ['./iceball.component.css']
})
export class IceballComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'ice-header',
  templateUrl: './ice-header.html',
  styleUrls: ['./iceball.component.css']
})
export class IceHeader implements OnInit {
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
  selector: 'ice-content',
  templateUrl: './ice-content.html',
  styleUrls: ['./iceball.component.css']
})
export class IceContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'iceresult',
  templateUrl: './iceresult.html',
  styleUrls: ['./iceball.component.css']
})
export class IceResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
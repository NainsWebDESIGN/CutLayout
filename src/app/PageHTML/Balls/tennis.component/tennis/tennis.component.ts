import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.css']
})
export class TennisComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'tennis-header',
  templateUrl: './tennis-header.html',
  styleUrls: ['./tennis.component.css']
})
export class TennisHeader implements OnInit {
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
  selector: 'tennis-content',
  templateUrl: './tennis-content.html',
  styleUrls: ['./tennis.component.css']
})
export class TennisContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'tennisresult',
  templateUrl: './tennisresult.html',
  styleUrls: ['./tennis.component.css']
})
export class TennisResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
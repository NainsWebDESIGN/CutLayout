import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-snooker',
  templateUrl: './snooker.component.html',
  styleUrls: ['./snooker.component.css']
})
export class SnookerComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'snooker-header',
  templateUrl: './snooker-header.html',
  styleUrls: ['./snooker.component.css']
})
export class SnookerHeader implements OnInit {
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
  selector: 'snooker-content',
  templateUrl: './snooker-content.html',
  styleUrls: ['./snooker.component.css']
})
export class SnookerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'snookerresult',
  templateUrl: './snookerresult.html',
  styleUrls: ['./snooker.component.css']
})
export class SnookerResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
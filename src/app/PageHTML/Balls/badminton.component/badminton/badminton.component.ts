import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-badminton',
  templateUrl: './badminton.component.html',
  styleUrls: ['./badminton.component.css']
})
export class BadmintonComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'badminton-header',
  templateUrl: './badminton-header.html',
  styleUrls: ['./badminton.component.css']
})
export class BadmintonHeader implements OnInit {
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
  selector: 'badminton-content',
  templateUrl: './badminton-content.html',
  styleUrls: ['./badminton.component.css']
})
export class BadmintonContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'badminton-right',
  templateUrl: './badminton-right.html',
  styleUrls: ['./badminton.component.css']
})
export class BadmintonRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'badmintonbet',
  templateUrl: './badmintonbet.html',
  styleUrls: ['./badminton.component.css']
})
export class BadmintonBet implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'badmintonresult',
  templateUrl: './badmintonresult.html',
  styleUrls: ['./badminton.component.css']
})
export class BadmintonResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
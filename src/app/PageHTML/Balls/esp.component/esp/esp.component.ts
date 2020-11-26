import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-esp',
  templateUrl: './esp.component.html',
  styleUrls: ['./esp.component.css']
})
export class EspComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'esp-header',
  templateUrl: './esp-header.html',
  styleUrls: ['./esp.component.css']
})
export class EspHeader implements OnInit {
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
  selector: 'esp-content',
  templateUrl: './esp-content.html',
  styleUrls: ['./esp.component.css']
})
export class EspContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'espbet',
  templateUrl: './espbet.html',
  styleUrls: ['./esp.component.css']
})
export class EspBet implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'espresult',
  templateUrl: './espresult.html',
  styleUrls: ['./esp.component.css']
})
export class EspResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

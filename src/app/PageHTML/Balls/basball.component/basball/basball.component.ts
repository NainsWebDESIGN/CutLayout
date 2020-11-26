import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basball',
  templateUrl: './basball.component.html',
  styleUrls: ['./basball.component.css']
})
export class BasballComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'basball-header',
  templateUrl: './basball-header.html',
  styleUrls: ['./basball.component.css']
})
export class BasballHeader implements OnInit {
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
  selector: 'basball-content',
  templateUrl: './basball-content.html',
  styleUrls: ['./basball.component.css']
})
export class BasballContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'basball-right',
  templateUrl: './basball-right.html',
  styleUrls: ['./basball.component.css']
})
export class BasballRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'basbet',
  templateUrl: './basbet.html',
  styleUrls: ['./basball.component.css']
})
export class BasBet implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'basresult',
  templateUrl: './basresult.html',
  styleUrls: ['./basball.component.css']
})
export class BasResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'basteach',
  templateUrl: './basteach.html',
  styleUrls: ['./basball.component.css']
})
export class BasTeach implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'soccer-header',
  templateUrl: './soccer-header.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerHeader implements OnInit {
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
  selector: 'soccer-content',
  templateUrl: './soccer-content.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'soccer-right',
  templateUrl: './soccer-right.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'sobet',
  templateUrl: './sobet.html',
  styleUrls: ['./soccer.component.css']
})
export class SoBet implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'soresult',
  templateUrl: './soresult.html',
  styleUrls: ['./soccer.component.css']
})
export class SoResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'soteach',
  templateUrl: './soteach.html',
  styleUrls: ['./soccer.component.css']
})
export class SoTeach implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


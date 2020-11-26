import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'football-header',
  templateUrl: './football-header.html',
  styleUrls: ['./football.component.css']
})
export class FootballHeader implements OnInit {
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
  selector: 'football-content',
  templateUrl: './football-content.html',
  styleUrls: ['./football.component.css']
})
export class FootballContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'football-right',
  templateUrl: './football-right.html',
  styleUrls: ['./football.component.css']
})
export class FootballRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'footballbet',
  templateUrl: './footballbet.html',
  styleUrls: ['./football.component.css']
})
export class FootballBet implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'footballresult',
  templateUrl: './footballresult.html',
  styleUrls: ['./football.component.css']
})
export class FootballResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
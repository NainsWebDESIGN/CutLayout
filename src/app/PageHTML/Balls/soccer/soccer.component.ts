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
  league = false;
  leaguecheck: any = [];
  constructor() { }
  leaguechoice() {
    this.league = !this.league;
  }
  checkactive(x) {
    if (x == 0 && this.leaguecheck[0] == true) {
      for (let i = 0; i < this.leaguecheck.length; i++) {
        this.leaguecheck[i] = false;
      }
    } else if (x == 0 && this.leaguecheck[0] == false) {
      for (let i = 0; i < this.leaguecheck.length; i++) {
        this.leaguecheck[i] = true;
      }
    } else {
      this.leaguecheck[x] = !this.leaguecheck[x];
    }
    for (let i = 0; i < this.leaguecheck.length; i++) {
      if (this.leaguecheck[i] == false) {
        this.leaguecheck[0] = false;
      }
    }
  }
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
    let checktotal = document.getElementsByClassName('check');
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      this.boolin[0] = true;
    }
    for (let i = 0; i < checktotal.length; i++) {
      this.leaguecheck[i] = true;
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
  boolin = false;
  constructor() { }
  change(x) {
    x == 0 ? this.boolin = false : this.boolin = true;
    x == 1 ? this.boolin = true : this.boolin = false;
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'soccer-teachbs',
  templateUrl: './soccerteach_bs.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerTeach_Bs implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'soccer-teach',
  templateUrl: './soccerteach.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerTeach implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
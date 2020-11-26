import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataBassService } from '../../../../DataBass.service';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css'],
  providers: [DataBassService]
})
export class SoccerComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  @Output() soloEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  getSolo(x) {
    this.soloEvent.emit(x);
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
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 6;
  league = false;
  leaguecheck: any = [];
  leaguebox: any = [];
  constructor(private Ajax: DataBassService) { }
  getSolo(x) {
    this.soloEvent.emit(x);
  }
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
    console.log(this.leaguecheck)
  }
  changeboolin(x) {
    if (x == 2) {
      this.popupEvent.emit(true);
    } else if (x !== 2) {
      this.popupEvent.emit(false);
    }
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
    this.boolin[x] = true;
  }
  async getresult() {
    await this.Ajax.getData('result').then(el => {
      this.leaguebox = el;
    })
    return this.leaguebox;
  }
  async ngOnInit() {
    let data = await this.getresult();
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      this.boolin[0] = true;
    }
    for (let i = 0; i < (data.length + 1); i++) {
      this.leaguecheck[i] = true;
    }
  }

}

@Component({
  selector: 'soccer-content',
  templateUrl: './soccer-beginner.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerContent implements OnInit {
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getSolo() {
    this.soloEvent.emit(true);
  }
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

@Component({
  selector: 'soccer-senior',
  templateUrl: './soccer-senior.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerSenior implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
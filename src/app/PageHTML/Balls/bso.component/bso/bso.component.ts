import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataBassService } from '../../../../DataBass.service';

@Component({
  selector: 'app-bso',
  templateUrl: './bso.component.html',
  styleUrls: ['./bso.component.css'],
  providers: [DataBassService]
})
export class BsoComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  @Output() soloEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getSolo(x) {
    this.soloEvent.emit(x);
  }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'bso-header',
  templateUrl: './bso-header.html',
  styleUrls: ['./bso.component.css']
})
export class BsoHeader implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 6;
  league = false;
  leaguecheck: any = [];
  leaguebox: any = [];
  skewers = true;
  constructor(private Ajax: DataBassService) { }
  getSolo(x) {
    this.soloEvent.emit(x);
  }
  leaguechoice() {
    this.league = !this.league;
  }
  async checkactive(x) {
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
    let a: any = [];
    this.leaguecheck[0] = true;
    await this.leaguecheck.forEach(boolean => {
      boolean == false ? a.push(boolean) : '';
    })
    a.length > 0 ? this.leaguecheck[0] = false : this.leaguecheck[0] = true;
  }
  changeboolin(x) {
    this.league = false;
    x == 2 || x == 5 ? this.popupEvent.emit(true) : this.popupEvent.emit(false);
    x == 2 || x == 5 ? this.skewers = false : this.skewers = true;
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
  selector: 'bso-content',
  templateUrl: './bso-content.html',
  styleUrls: ['./bso.component.css']
})
export class BsoContent implements OnInit {
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getSolo() {
    this.soloEvent.emit(true);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'bso-senior',
  templateUrl: './bso-senior.html',
  styleUrls: ['./bso.component.css']
})
export class BsoSenior implements OnInit {
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getSolo() {
    this.soloEvent.emit(true);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'bso-result',
  templateUrl: './bso-result.html',
  styleUrls: ['./bso.component.css']
})
export class BsoResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
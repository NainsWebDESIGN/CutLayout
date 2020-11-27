import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataBassService } from '../../../../DataBass.service';

@Component({
  selector: 'app-esp',
  templateUrl: './esp.component.html',
  styleUrls: ['./esp.component.css'],
  providers: [DataBassService]
})
export class EspComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
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
  selector: 'esp-header',
  templateUrl: './esp-header.html',
  styleUrls: ['./esp.component.css']
})
export class EspHeader implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 4;
  leaguebox: any = [];
  leaguecheck: any = [];
  league = false;
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
  }
  changeboolin(x) {
    this.league = false;
    x == 2 || x == 6 ? this.popupEvent.emit(true) : this.popupEvent.emit(false);
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
    for (let i = 0; i <= data.length; i++) {
      this.leaguecheck[i] = true;
    }
  }

}

@Component({
  selector: 'esp-content',
  templateUrl: './esp-content.html',
  styleUrls: ['./esp.component.css']
})
export class EspContent implements OnInit {
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getSolo() {
    this.soloEvent.emit(true);
  }
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

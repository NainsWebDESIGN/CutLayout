import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataBassService } from '../../../../DataBass.service';

@Component({
  selector: 'app-horse_race',
  templateUrl: './horse_race.component.html',
  styleUrls: ['./horse_race.component.css'],
  providers: [DataBassService]
})
export class Horse_raceComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();
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
  selector: 'horse-header',
  templateUrl: './horse-header.html',
  styleUrls: ['./horse_race.component.css']
})
export class HorseHeader implements OnInit {
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
  selector: 'horse-content',
  templateUrl: './horse-content.html',
  styleUrls: ['./horse_race.component.css']
})
export class HorseContent implements OnInit {
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getSolo() {
    this.soloEvent.emit(true);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'horseresult',
  templateUrl: './horseresult.html',
  styleUrls: ['./horse_race.component.css']
})
export class HorseResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
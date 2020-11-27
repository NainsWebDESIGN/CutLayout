import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataBassService } from '../../../../DataBass.service';

@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.component.html',
  styleUrls: ['./basketball.component.css'],
  providers: [DataBassService]
})
export class BasketballComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();
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
  selector: 'basketball-header',
  templateUrl: './basketball-header.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballHeader implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 7;
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
    x == 2 || x == 6 ? this.skewers = false : this.skewers = true;
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
  selector: 'basketball-content',
  templateUrl: './basketball-content.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballContent implements OnInit {
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getSolo() {
    this.soloEvent.emit(true);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'basketresult',
  templateUrl: './basketresult.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'basketteach',
  templateUrl: './basketteach.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketTeach implements OnInit {
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
  selector: 'basketball-senior',
  templateUrl: './basketball-senior.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketSenior implements OnInit {
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getSolo() {
    this.soloEvent.emit(true);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'basketball-teach',
  templateUrl: './basketball-teach.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballTeach implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}

@Component({
  selector: 'basketball-teachbs',
  templateUrl: './basketball-teachbs.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballTeachbs implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
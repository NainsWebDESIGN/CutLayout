import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataBassService } from '../../../../DataBass.service';

@Component({
  selector: 'app-basball',
  templateUrl: './basball.component.html',
  styleUrls: ['./basball.component.css'],
  providers: [DataBassService]
})
export class BasballComponent implements OnInit {
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
  selector: 'basball-header',
  templateUrl: './basball-header.html',
  styleUrls: ['./basball.component.css']
})
export class BasballHeader implements OnInit {
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
    for (let i = 0; i < (data.length + 1); i++) {
      this.leaguecheck[i] = true;
    }
  }

}

@Component({
  selector: 'basball-content',
  templateUrl: './basball-content.html',
  styleUrls: ['./basball.component.css']
})
export class BasballContent implements OnInit {
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getSolo() {
    this.soloEvent.emit(true);
  }
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
  selector: 'basball-senior',
  templateUrl: './basball-senior.html',
  styleUrls: ['./basball.component.css']
})
export class BasballSenior implements OnInit {
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  getSolo() {
    this.soloEvent.emit(true);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'basballteach-bs',
  templateUrl: './basballteach-bs.html',
  styleUrls: ['./basball.component.css']
})
export class BasTeachBs implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'basballteach',
  templateUrl: './basballteach.html',
  styleUrls: ['./basball.component.css']
})
export class BasballTeach implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
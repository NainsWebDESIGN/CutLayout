import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-horse_race',
  templateUrl: './horse_race.component.html',
  styleUrls: ['./horse_race.component.css']
})
export class Horse_raceComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
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
  selector: 'horse-content',
  templateUrl: './horse-content.html',
  styleUrls: ['./horse_race.component.css']
})
export class HorseContent implements OnInit {

  constructor() { }

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
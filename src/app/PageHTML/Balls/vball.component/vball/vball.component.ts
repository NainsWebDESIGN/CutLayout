import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vball',
  templateUrl: './vball.component.html',
  styleUrls: ['./vball.component.css']
})
export class VballComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  getPopup(PopupValue) {
    this.popupEvent.emit(PopupValue);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'vball-header',
  templateUrl: './vball-header.html',
  styleUrls: ['./vball.component.css']
})
export class VballHeader implements OnInit {
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
  selector: 'vball-content',
  templateUrl: './vball-content.html',
  styleUrls: ['./vball.component.css']
})
export class VballContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'vballresult',
  templateUrl: './vballresult.html',
  styleUrls: ['./vball.component.css']
})
export class VballResult implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
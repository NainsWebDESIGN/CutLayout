import { element } from 'protractor';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  boolin: any = [];
  pagetotal = 4;
  constructor() { }
  changeboolin(x) {
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
      if (i == (this.pagetotal - 1)) {
        this.boolin[i] = true;
      }
    }
  }

}

@Component({
  selector: 'message-header',
  templateUrl: './message_header.html',
  styleUrls: ['./message.component.css']
})
export class MessageHeader implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 4;
  sportActive: any = [];
  constructor() { }
  changeboolin(x) {
    this.childEvent.emit(x);
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      if (x == i) {
        this.boolin[i] = true;
      }
    }
  }
  changeSport(x) {
    for (let i = 0; i < 2; i++) {
      this.sportActive[i] = false;
    }
    this.sportActive[x] = true;
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      if (i == (this.pagetotal - 1)) {
        this.boolin[i] = true;
      }
    }
    this.sportActive[0] = true;
    this.sportActive[1] = false;
  }

}

@Component({
  selector: 'message-message',
  templateUrl: './message.html',
  styleUrls: ['./message.component.css']
})
export class MessageMessage implements OnInit {
  boolin: any = [];
  pagetotal = 6;
  constructor() { }
  changeboolin(x) {
    this.boolin[x] = !this.boolin[x];
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
  }

}

@Component({
  selector: 'message-events',
  templateUrl: './events.html',
  styleUrls: ['./message.component.css']
})
export class MessageEvents implements OnInit {
  boolin: any = [];
  pagetotal = 5;
  constructor() { }
  changeboolin(x) {
    this.boolin[x] = !this.boolin[x];
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
  }

}

@Component({
  selector: 'message-anno',
  templateUrl: './anno.html',
  styleUrls: ['./message.component.css']
})
export class MessageAnno implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'message-gameanno',
  templateUrl: './game_anno.html',
  styleUrls: ['./message.component.css']
})
export class MessageGameAnno implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
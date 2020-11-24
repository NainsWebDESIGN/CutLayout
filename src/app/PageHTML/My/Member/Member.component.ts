import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-Member',
  templateUrl: './Member.component.html',
  styleUrls: ['./Member.component.css']
})
export class MemberComponent implements OnInit {
  boolin = true;
  cashboolin = false;
  cardboolin = false;
  constructor() { }
  getcash(cashEvent) {
    this.cashboolin = cashEvent;
  }
  getcard(cardEvent) {
    this.cardboolin = cardEvent;
  }
  getChild(ChildValue) {
    this.boolin = ChildValue;
  }
  close(x) {
    this.boolin = x;
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'member-right',
  templateUrl: './memberright.html',
  styleUrls: ['./Member.component.css']
})
export class MemberRight implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  change() {
    this.childEvent.emit(false);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'member-option',
  templateUrl: './memberoption.html',
  styleUrls: ['./Member.component.css']
})
export class MemberOption implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}

@Component({
  selector: 'member-left',
  templateUrl: './memberleft.html',
  styleUrls: ['./Member.component.css']
})
export class MemberLeft implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  @Output() cashEvent: EventEmitter<any> = new EventEmitter();
  @Output() cardEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 15;
  constructor(private router: Router, private reload: Location) { }
  changecash() {
    this.cashEvent.emit(true);
  }
  getChild(ChildValue) {
    if (ChildValue.cardEvent) {
      ChildValue.cardEvent.subscribe(boolin => {
        this.cardEvent.emit(boolin);
      })
    }
    if (ChildValue.childEvent) {
      ChildValue.childEvent.subscribe(boolin => {
        this.childEvent.emit(boolin)
      })
    }
    if (ChildValue.leftActive) {
      ChildValue.leftActive.subscribe(number => {
        this.start(number);
      })
    }
  }
  listen() {
    let optionsurl = '/index/member/';
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          for (let i = 0; i < this.pagetotal; i++) {
            this.boolin[i] = false;
          }
          if (event['url'] == optionsurl + 'mybillsave') {
            this.boolin[0] = true;
          } else if (event['url'] == optionsurl + 'help') {
            this.boolin[8] = true;
          } else if (event['url'] == optionsurl + 'contactus') {
            this.boolin[9] = true;
          } else if (event['url'] == optionsurl + 'download') {
            this.boolin[14] = true;
          } else if (event['url'] == optionsurl + 'billtrans') {
            this.boolin[1] = true;
          } else if (event['url'] == optionsurl + 'transrecord/recordbox') {
            this.boolin[5] = true;
          } else if (event['url'] == optionsurl + 'billrecord') {
            this.boolin[7] = true;
          } else if (event['url'] == optionsurl + 'memberright') {
            this.boolin[3] = true;
          }
        }
      })
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
    if (this.reload.path() == optionsurl + 'mybillsave') {
      this.boolin[0] = true;
    } else if (this.reload.path() == optionsurl + 'help') {
      this.boolin[8] = true;
    } else if (this.reload.path() == optionsurl + 'contactus') {
      this.boolin[9] = true;
    } else if (this.reload.path() == optionsurl + 'download') {
      this.boolin[14] = true;
    } else if (this.reload.path() == optionsurl + 'billtrans') {
      this.boolin[1] = true;
    } else if (this.reload.path() == optionsurl + 'transrecord/recordbox') {
      this.boolin[5] = true;
    } else if (this.reload.path() == optionsurl + 'billrecord') {
      this.boolin[7] = true;
    } else if (this.reload.path() == optionsurl + 'memberright') {
      this.boolin[3] = true;
    }
  }
  start(x) {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      this.boolin[x] = true;
    }
  }
  ngOnInit() {
    this.listen();
  }

}

@Component({
  selector: 'getcash-popup',
  templateUrl: './getcash_popup.html',
  styleUrls: ['./Member.component.css']
})
export class GetCashPopup implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  boolin = false;
  @Input()
  set getFather(boolin: boolean) {
    this.boolin = boolin;
  }
  constructor() { }
  close() {
    this.childEvent.emit(false);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'addcard',
  templateUrl: './addcard_popup.html',
  styleUrls: ['./Member.component.css']
})
export class AddCard implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  boolin = false;
  @Input()
  set getFather(boolin: boolean) {
    this.boolin = boolin;
  }
  constructor() { }
  close() {
    this.childEvent.emit(false);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'changePassword',
  templateUrl: './changePassword.html',
  styleUrls: ['./Member.component.css']
})
export class ChangePassword implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  close() {
    this.childEvent.emit(true);
  }
  ngOnInit() {
  }

}
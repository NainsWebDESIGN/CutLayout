import { DataBassService } from './../../../DataBass.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-Member',
  templateUrl: './Member.component.html',
  styleUrls: ['./Member.component.css'],
  providers: [DataBassService]
})
export class MemberComponent implements OnInit {
  LeftValue: number;
  boolin = true;
  cashboolin = false;
  cardboolin = false;
  constructor() { }
  getcash(cashEvent) {
    this.cashboolin = cashEvent;
  }
  leftValue(x) {
    this.LeftValue = x;
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
  @Output() leftEvent: EventEmitter<any> = new EventEmitter();
  constructor(private reload: Location, private Ajax: DataBassService) { }
  async listen() {
    let pagetotal = await this.getLeft();
    let a: any = [];
    a = await pagetotal.filter(el => {
      return el.router.indexOf(this.reload.path()) > -1;
    })
    let NumberData = Number(a[0].CHID);
    this.leftEvent.emit(NumberData);
  }
  async getLeft() {
    let data: any = [];
    await this.Ajax.getData('Memberleft').then(el => {
      data = el;
    })
    return data;
  }
  ngOnInit() {
    this.listen();
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
  @Input()
  set GetOptionValue(x) {
    for (let i = 0; i < this.boolin.length; i++) {
      this.boolin[i] = false;
    }
    this.boolin[x] = true;
  }
  left: any = [];
  boolin: any = [];
  constructor(private reload: Location, private Ajax: DataBassService) { }
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
        this.start()
      })
    }
  }
  async listen() {
    let pagetotal = await this.getLeft();
    for (let i = 0; i <= pagetotal.length; i++) {
      this.boolin[i] = false;
    }
    let a: any = [];
    a = await pagetotal.filter(el => {
      return el.router.indexOf(this.reload.path()) > -1;
    })
    let NumberData = Number(a[0].CHID);
    this.boolin[NumberData] = true;
    if (NumberData == 2 || NumberData == 4) {
      this.cashEvent.emit(true);
    }
  }
  async getLeft() {
    let data: any = [];
    await this.Ajax.getData('Memberleft').then(el => {
      data = el;
    })
    return data;
  }
  async start() {
    let data = await this.getLeft();
    this.left[0] = data.slice(0, 3);
    this.left[1] = data.slice(3);
    this.left[2] = data;
    for (let i = 0; i <= data.length; i++) {
      this.boolin[i] = [];
    }
    this.listen()
  }
  ngOnInit() {
    this.start();
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
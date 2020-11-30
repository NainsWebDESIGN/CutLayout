import { DataBassService } from './../../../DataBass.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { UrlBassService } from './../../../UrlBass.service';


@Component({
  selector: 'app-Member',
  templateUrl: './Member.component.html',
  styleUrls: ['./Member.component.css'],
  providers: [UrlBassService, DataBassService]
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
  left: any = [];
  boolin: any = [];
  constructor(private router: Router, private reload: Location, private Ajax: DataBassService, private leftArray: UrlBassService) { }
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
    this.router.events
      .subscribe(async event => {
        if (event instanceof NavigationEnd) {
          let data = await this.leftArray.changeurl(event['url']);
          let NumberData = Number(data);
          this.boolin[NumberData] = true;
          if (NumberData == 2 || NumberData == 4) {
            this.cashEvent.emit(true);
          }
        }
      })
    let data = await this.leftArray.changeurl(this.reload.path());
    let NumberData = Number(data);
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
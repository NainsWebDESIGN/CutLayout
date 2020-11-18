import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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
  close() {
    this.boolin = true;
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
  constructor() { }
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
  }
  ngOnInit() {
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
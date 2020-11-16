import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Member',
  templateUrl: './Member.component.html',
  styleUrls: ['./Member.component.css']
})
export class MemberComponent implements OnInit {
  boolin = true;
  constructor() { }
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
  constructor() { }
  getChild(ChildValue) {
    ChildValue.change();

    ChildValue.childEvent.subscribe(boolin => {
      this.childEvent.emit(boolin)
    })
  }
  ngOnInit() {
  }

}
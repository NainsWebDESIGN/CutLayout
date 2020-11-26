import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mortor',
  templateUrl: './mortor.component.html',
  styleUrls: ['./mortor.component.css']
})
export class MortorComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'mortor-header',
  templateUrl: './mortor-header.html',
  styleUrls: ['./mortor.component.css']
})
export class MortorHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'mortor-content',
  templateUrl: './mortor-content.html',
  styleUrls: ['./mortor.component.css']
})
export class MortorContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tableball_inner',
  templateUrl: './tableball_inner.component.html',
  styleUrls: ['./tableball_inner.component.css']
})
export class Tableball_innerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'tableinner-header',
  templateUrl: './tableinner-header.html',
  styleUrls: ['./tableball_inner.component.css']
})
export class TableinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'tableinner-content',
  templateUrl: './tableinner-content.html',
  styleUrls: ['./tableball_inner.component.css']
})
export class TableinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
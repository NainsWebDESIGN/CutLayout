import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-soccer_inner',
  templateUrl: './soccer_inner.component.html',
  styleUrls: ['./soccer_inner.component.css']
})
export class Soccer_innerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'soinner-header',
  templateUrl: './soccerinner-header.html',
  styleUrls: ['./soccer_inner.component.css']
})
export class SoinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'soinner-content',
  templateUrl: './soccerinner-content.html',
  styleUrls: ['./soccer_inner.component.css']
})
export class SoinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'soinner-right',
  templateUrl: './soccerinner-right.html',
  styleUrls: ['./soccer_inner.component.css']
})
export class SoinnerRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
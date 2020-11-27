import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bsoinner',
  templateUrl: './bsoinner.component.html',
  styleUrls: ['./bsoinner.component.css']
})
export class BsoinnerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'bsoinner-header',
  templateUrl: './bsoinner-header.html',
  styleUrls: ['./bsoinner.component.css']
})
export class BsoinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'bsoinner-content',
  templateUrl: './bsoinner-content.html',
  styleUrls: ['./bsoinner.component.css']
})
export class BsoinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
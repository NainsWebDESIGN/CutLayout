import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-horserace_inner',
  templateUrl: './horserace_inner.component.html',
  styleUrls: ['./horserace_inner.component.css']
})
export class Horserace_innerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'horseinner-header',
  templateUrl: './horseinner-header.html',
  styleUrls: ['./horserace_inner.component.css']
})
export class HorseinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'horseinner-content',
  templateUrl: './horseinner-content.html',
  styleUrls: ['./horserace_inner.component.css']
})
export class HorseinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
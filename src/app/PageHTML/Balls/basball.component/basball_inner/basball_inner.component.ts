import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-basball_inner',
  templateUrl: './basball_inner.component.html',
  styleUrls: ['./basball_inner.component.css']
})
export class Basball_innerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'basinner-header',
  templateUrl: './basinner-header.html',
  styleUrls: ['./basball_inner.component.css']
})
export class BasinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'basinner-content',
  templateUrl: './basinner-content.html',
  styleUrls: ['./basball_inner.component.css']
})
export class BasinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tennisinner',
  templateUrl: './tennisinner.component.html',
  styleUrls: ['./tennisinner.component.css']
})
export class TennisinnerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'tennisinner-header',
  templateUrl: './tennisinner-header.html',
  styleUrls: ['./tennisinner.component.css']
})
export class TennisinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'tennisinner-content',
  templateUrl: './tennisinner-content.html',
  styleUrls: ['./tennisinner.component.css']
})
export class TennisinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-badmintoninner',
  templateUrl: './badmintoninner.component.html',
  styleUrls: ['./badmintoninner.component.css']
})
export class BadmintoninnerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'badmintoninner-header',
  templateUrl: './badmintoninner-header.html',
  styleUrls: ['./badmintoninner.component.css']
})
export class BadmintoninnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'badmintoninner-content',
  templateUrl: './badmintoninner-content.html',
  styleUrls: ['./badmintoninner.component.css']
})
export class BadmintoninnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
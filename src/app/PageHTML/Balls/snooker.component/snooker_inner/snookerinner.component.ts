import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-snookerinner',
  templateUrl: './snookerinner.component.html',
  styleUrls: ['./snookerinner.component.css']
})
export class SnookerinnerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'snookerinner-header',
  templateUrl: './snookerinner-header.html',
  styleUrls: ['./snookerinner.component.css']
})
export class SnookerinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'snookerinner-content',
  templateUrl: './snookerinner-content.html',
  styleUrls: ['./snookerinner.component.css']
})
export class SnookerinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
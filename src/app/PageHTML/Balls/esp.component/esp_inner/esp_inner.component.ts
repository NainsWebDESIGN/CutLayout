import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-esp_inner',
  templateUrl: './esp_inner.component.html',
  styleUrls: ['./esp_inner.component.css']
})
export class Esp_innerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'espinner-header',
  templateUrl: './espinner-header.html',
  styleUrls: ['./esp_inner.component.css']
})
export class EspinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'espinner-content',
  templateUrl: './espinner-content.html',
  styleUrls: ['./esp_inner.component.css']
})
export class EspinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
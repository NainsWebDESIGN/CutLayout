import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ice_inner',
  templateUrl: './ice_inner.component.html',
  styleUrls: ['./ice_inner.component.css']
})
export class Ice_InnerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'iceinner-header',
  templateUrl: './iceinner-header.html',
  styleUrls: ['./ice_inner.component.css']
})
export class IceinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'iceinner-content',
  templateUrl: './iceinner-content.html',
  styleUrls: ['./ice_inner.component.css']
})
export class IceinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
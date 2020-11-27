import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vball_inner',
  templateUrl: './vball_inner.component.html',
  styleUrls: ['./vball_inner.component.css']
})
export class Vball_innerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'vballinner-header',
  templateUrl: './vballinner-header.html',
  styleUrls: ['./vball_inner.component.css']
})
export class VballinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'vballinner-content',
  templateUrl: './vballinner-content.html',
  styleUrls: ['./vball_inner.component.css']
})
export class VballinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
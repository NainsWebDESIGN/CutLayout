import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock_inner',
  templateUrl: './stock_inner.component.html',
  styleUrls: ['./stock_inner.component.css']
})
export class Stock_innerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'stockinner-header',
  templateUrl: './stockinner-header.html',
  styleUrls: ['./stock_inner.component.css']
})
export class StockinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'stockinner-content',
  templateUrl: './stockinner-content.html',
  styleUrls: ['./stock_inner.component.css']
})
export class StockinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
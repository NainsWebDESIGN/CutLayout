import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-basketball_inner',
  templateUrl: './basketball_inner.component.html',
  styleUrls: ['./basketball_inner.component.css']
})
export class Basketball_innerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'basket-header',
  templateUrl: './basketballinner-header.html',
  styleUrls: ['./basketball_inner.component.css']
})
export class BasketHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'basket-content',
  templateUrl: './basketballinner-content.html',
  styleUrls: ['./basketball_inner.component.css']
})
export class BasketContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
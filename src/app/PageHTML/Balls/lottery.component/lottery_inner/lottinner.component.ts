import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-lottinner',
  templateUrl: './lottinner.component.html',
  styleUrls: ['./lottinner.component.css']
})
export class LottinnerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'lottinner-header',
  templateUrl: './lottinner-header.html',
  styleUrls: ['./lottinner.component.css']
})
export class LottinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'lottinner-content',
  templateUrl: './lottinner-content.html',
  styleUrls: ['./lottinner.component.css']
})
export class LottinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
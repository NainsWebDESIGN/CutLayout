import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footballinner',
  templateUrl: './footballinner.component.html',
  styleUrls: ['./footballinner.component.css']
})
export class FootballinnerComponent implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  backpage(x) {
    this.pageEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'footballinner-header',
  templateUrl: './footballinner-header.html',
  styleUrls: ['./footballinner.component.css']
})
export class FootballinnerHeader implements OnInit {
  @Output() pageEvent: EventEmitter<any> = new EventEmitter;
  constructor(private location: Location) { }
  back() {
    this.pageEvent.emit(-1);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'footballinner-content',
  templateUrl: './footballinner-content.html',
  styleUrls: ['./footballinner.component.css']
})
export class FootballinnerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
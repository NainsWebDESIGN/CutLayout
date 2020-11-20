import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter;
  constructor() { }
  ngOnInit() {
  }

}

@Component({
  selector: 'soccer-header',
  templateUrl: './soccer-header.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerHeader implements OnInit {
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }

}

@Component({
  selector: 'soccer-content',
  templateUrl: './soccer-content.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'soccer-right',
  templateUrl: './soccer-right.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


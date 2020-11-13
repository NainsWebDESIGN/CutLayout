import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basball',
  templateUrl: './basball.component.html',
  styleUrls: ['./basball.component.css']
})
export class BasballComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'basball-right',
  templateUrl: './basball_right.html',
  styleUrls: ['./basball.component.css']
})
export class BasballRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'basball-right_live',
  templateUrl: './basball_right_live.html',
  styleUrls: ['./basball.component.css']
})
export class BasballRight_Live implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
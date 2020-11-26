import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basketball_inner',
  templateUrl: './basketball_inner.component.html',
  styleUrls: ['./basketball_inner.component.css']
})
export class Basketball_innerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'basket-header',
  templateUrl: './basketballinner-header.html',
  styleUrls: ['./basketball_inner.component.css']
})
export class BasketHeader implements OnInit {

  constructor() { }

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
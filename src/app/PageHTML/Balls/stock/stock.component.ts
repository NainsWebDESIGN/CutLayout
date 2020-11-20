import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'stock-header',
  templateUrl: './stock-header.html',
  styleUrls: ['./stock.component.css']
})
export class StockHeader implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'stock-content',
  templateUrl: './stock-content.html',
  styleUrls: ['./stock.component.css']
})
export class StockContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'stock-right',
  templateUrl: './stock-right.html',
  styleUrls: ['./stock.component.css']
})
export class StockRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'index-header',
  templateUrl: './header.html',
  styleUrls: ['./index.component.css']
})
export class IndexHeader implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'index-left',
  templateUrl: './left.html',
  styleUrls: ['./index.component.css']
})
export class IndexLeft implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'index-right',
  templateUrl: './right.html',
  styleUrls: ['./index.component.css']
})
export class IndexRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill_now',
  templateUrl: './bill_now.component.html',
  styleUrls: ['./bill_now.component.css']
})
export class Bill_nowComponent implements OnInit {
  boolin: any = [];
  divtotal: any = [];
  constructor() { }
  changeboolin(x) {
    this.boolin[x] = !this.boolin[x];
  }
  start() {
    let divnumber = document.getElementsByClassName('basic_bill');
    for (let i = 0; i < divnumber.length; i++) {
      this.divtotal.push(divnumber[i]);
    }
    for (let i = 0; i < this.divtotal.length; i++) {
      this.boolin[i] = false;
    }
  }
  ngOnInit() {
    this.start();
  }

}

@Component({
  selector: 'now-header',
  templateUrl: './now_header.html',
  styleUrls: ['./bill_now.component.css']
})
export class NowHeader implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}

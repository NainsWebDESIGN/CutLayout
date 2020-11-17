import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bill_trans',
  templateUrl: './bill_trans.component.html',
  styleUrls: ['./bill_trans.component.css']
})
export class Bill_transComponent implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  boolin = false;
  constructor() { }
  boolinchange() {
    this.boolin = !this.boolin;
  }
  change(x) {
    this.childEvent.emit(x);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'trans-header',
  templateUrl: './trans_header.html',
  styleUrls: ['./bill_trans.component.css']
})
export class TransHeader implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  change() {
    this.childEvent.emit(false);
  }
  ngOnInit() {
  }

}


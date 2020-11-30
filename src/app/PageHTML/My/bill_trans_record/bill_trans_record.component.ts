import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill_trans_record',
  templateUrl: './bill_trans_record.component.html',
  styleUrls: ['./bill_trans_record.component.css']
})
export class Bill_trans_recordComponent implements OnInit {
  boolin: any = [];
  total = 3;
  constructor() { }
  changeboolin(x) {
    for (let i = 0; i < this.total; i++) {
      this.boolin[i] = false;
    }
    this.boolin[x] = true;
  }
  ngOnInit() {
    this.changeboolin(0);
  }

}

@Component({
  selector: 'tr_record-box',
  templateUrl: './tr_recordbox.html',
  styleUrls: ['./bill_trans_record.component.css']
})
export class Tr_RecordBox implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'record-transfor',
  templateUrl: './transfor.html',
  styleUrls: ['./bill_trans_record.component.css']
})
export class TransFor implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'record-takeout',
  templateUrl: './takeout.html',
  styleUrls: ['./bill_trans_record.component.css']
})
export class TakeOut implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
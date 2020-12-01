import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill_record',
  templateUrl: './bill_record.component.html',
  styleUrls: ['./bill_record.component.css']
})
export class Bill_recordComponent implements OnInit {
  basic: any = [false, false];
  boolin = false;
  constructor() { }
  openbasic(x) {
    this.basic[x] = !this.basic[x];
  }
  changeboolin() {
    this.boolin = !this.boolin;
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'record-header',
  templateUrl: './bill_record_header.html',
  styleUrls: ['./bill_record.component.css']
})
export class BillRecordHeader implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
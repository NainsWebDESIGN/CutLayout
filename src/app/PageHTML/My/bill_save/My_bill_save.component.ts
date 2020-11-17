import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataBassService } from '../../../DataBass.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-My_bill_save',
  templateUrl: './My_bill_save.component.html',
  styleUrls: ['./My_bill_save.component.css'],
  providers: [DataBassService]
})
export class My_bill_saveComponent implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  checkbx: any = [];
  money: any = [];
  constructor(private http: HttpClient, private Ajax: DataBassService) { }
  async checksave(y) {
    let data = await this.Start();
    this.checkbx = [];
    for (let i = 0; i < data.length; i++) {
      if (i == y) {
        this.checkbx[i] = true;
      } else {
        this.checkbx[i] = false;
      }
    }
  }
  change(x) {
    this.childEvent.emit(x);
  }
  Start() {
    let data = this.Ajax.getData('money').then(el => {
      this.money = el;
      return el;
    })
    return data;
  }
  ngOnInit() {
    this.checksave(0);
  }

}

@Component({
  selector: 'billsave-header',
  templateUrl: './bill_header.html',
  styleUrls: ['./My_bill_save.component.css']
})
export class BillSaveHeader implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  change() {
    this.childEvent.emit(false);
  }
  ngOnInit() {
  }

}

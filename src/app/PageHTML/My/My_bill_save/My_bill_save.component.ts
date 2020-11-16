import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-My_bill_save',
  templateUrl: './My_bill_save.component.html',
  styleUrls: ['./My_bill_save.component.css']
})
export class My_bill_saveComponent implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  change() {
    this.childEvent.emit(false);
  }
  ngOnInit() {
  }

}

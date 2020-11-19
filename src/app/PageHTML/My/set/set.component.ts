import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 4;
  btnbox: any = [true, false];
  constructor() { }
  change(x) {
    this.childEvent.emit(x);
  }
  btnSwitch(x, y) {
    for (let i = 0; i < 2; i++) {
      this.boolin[x][i] = false;
      this.boolin[x][y] = true;
    }
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = [];
      // this.boolin[i].push(this.btnbox);
      this.btnbox.map(el => {
        this.boolin[i].push(el);
      })
    }
  }

}

@Component({
  selector: 'set-header',
  templateUrl: './set_header.html',
  styleUrls: ['./set.component.css']
})
export class SetHeader implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  change() {
    this.childEvent.emit(false);
  }
  ngOnInit() {
  }

}

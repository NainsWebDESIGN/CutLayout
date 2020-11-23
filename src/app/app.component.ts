import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('testID') test: HTMLElement;
  // testID = '';
  constructor() { }
  // testbtn(x) {
  //   this.testID = x;
  //   console.log(this.testID['nativeElement']);
  // }
  ngOnInit() {
    // this.testbtn(this.test);
    // console.log(this.test);
  }
}

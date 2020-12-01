import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-Error',
  templateUrl: './Error.component.html',
  styleUrls: ['./Error.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorComponent implements OnInit {

  constructor(private backpage: Location) { }
  back() {
    this.backpage.back();
  }
  ngOnInit() {
  }

}

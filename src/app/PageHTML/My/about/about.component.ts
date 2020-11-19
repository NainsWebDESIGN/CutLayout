import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  boolin: any = [];
  pagetotal = 2;
  constructor() { }
  changeboolin(x) {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
    this.boolin[x] = true;
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
    this.boolin[0] = true;
  }

}

@Component({
  selector: 'about-header',
  templateUrl: './about_header.html',
  styleUrls: ['./about.component.css']
})
export class AboutHeader implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 2;
  constructor() { }
  change(x) {
    this.childEvent.emit(x);
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
    this.boolin[x] = true;
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
    this.boolin[0] = true;
  }

}

@Component({
  selector: 'about-about',
  templateUrl: './Aabout.html',
  styleUrls: ['./about.component.css']
})
export class AboutAbout implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'about-link',
  templateUrl: './Alink.html',
  styleUrls: ['./about.component.css']
})
export class AboutLink implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Contact_us_sev',
  templateUrl: './Contact_us_sev.component.html',
  styleUrls: ['./Contact_us_sev.component.css']
})
export class Contact_us_sevComponent implements OnInit {
  boolin: any = [];
  pagetotal = 4;
  constructor() { }
  changeboolin(x) {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      if (x == i) {
        this.boolin[i] = true;
      }
    }
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      if (i == 0) {
        this.boolin[i] = true;
      }
    }
  }

}

@Component({
  selector: 'contact-header',
  templateUrl: './contact_header.html',
  styleUrls: ['./Contact_us_sev.component.css']
})
export class ContactHeader implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 4;
  constructor() { }
  change(x) {
    this.childEvent.emit(x);
  }
  changeboolin(x) {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      if (x == i) {
        this.boolin[i] = true;
      }
    }
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      if (i == 0) {
        this.boolin[i] = true;
      }
    }
  }

}

@Component({
  selector: 'contact-message',
  templateUrl: './messages_page.html',
  styleUrls: ['./Contact_us_sev.component.css']
})
export class ContactMessage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'contact-events',
  templateUrl: './events_page.html',
  styleUrls: ['./Contact_us_sev.component.css']
})
export class ContactEvents implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'contact-anno',
  templateUrl: './anno_page.html',
  styleUrls: ['./Contact_us_sev.component.css']
})
export class ContactAnno implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'contact-gameanno',
  templateUrl: './game_anno.html',
  styleUrls: ['./Contact_us_sev.component.css']
})
export class ContactGameAnno implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
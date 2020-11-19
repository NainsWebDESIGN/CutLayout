import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  boolin: any = [];
  pagetotal = 6;
  constructor() { }
  changeboolin(x) {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      if (i == x) {
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
  selector: 'help-header',
  templateUrl: './help_header.html',
  styleUrls: ['./help.component.css']
})
export class HelpHeader implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  boolin: any = [];
  pagetotal = 6;
  constructor() { }
  changeboolin(x) {
    this.childEvent.emit(x);
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
      if (i == x) {
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
  selector: 'help-save',
  templateUrl: './save_page.html',
  styleUrls: ['./help.component.css']
})
export class HelpSave implements OnInit {
  boolin: any = [];
  pagetotal = 6;
  constructor() { }
  changeboolin(x) {
    this.boolin[x] = !this.boolin[x];
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
  }

}

@Component({
  selector: 'help-trans',
  templateUrl: './trans_page.html',
  styleUrls: ['./help.component.css']
})
export class HelpTrans implements OnInit {
  boolin: any = [];
  pagetotal = 5;
  constructor() { }
  changeboolin(x) {
    this.boolin[x] = !this.boolin[x];
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
  }

}

@Component({
  selector: 'help-cash',
  templateUrl: './cash_page.html',
  styleUrls: ['./help.component.css']
})
export class HelpCash implements OnInit {
  boolin: any = [];
  pagetotal = 12;
  constructor() { }
  changeboolin(x) {
    this.boolin[x] = !this.boolin[x];
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
  }

}

@Component({
  selector: 'help-bet',
  templateUrl: './bet_page.html',
  styleUrls: ['./help.component.css']
})
export class HelpBet implements OnInit {
  boolin: any = [];
  pagetotal = 3;
  constructor() { }
  changeboolin(x) {
    this.boolin[x] = !this.boolin[x];
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
  }

}

@Component({
  selector: 'help-rules',
  templateUrl: './rules_page.html',
  styleUrls: ['./help.component.css']
})
export class HelpRules implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'help-sup',
  templateUrl: './sup_page.html',
  styleUrls: ['./help.component.css']
})
export class HelpSup implements OnInit {
  boolin: any = [];
  pagetotal = 10;
  constructor() { }
  changeboolin(x) {
    this.boolin[x] = !this.boolin[x];
  }
  ngOnInit() {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
  }

}
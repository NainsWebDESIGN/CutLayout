import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../app.component.css']
})
export class IndexComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}


@Component({
  selector: 'index-header',
  templateUrl: './header.html',
  styleUrls: ['../app.component.css']
})
export class IndexHeader implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'index-left',
  templateUrl: './left.html',
  styleUrls: ['../app.component.css']
})
export class IndexLeft implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();

  boolin = true;
  constructor() { }
  change() {
    this.childEvent.emit(this.boolin);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'index-right',
  templateUrl: './right.html',
  styleUrls: ['../app.component.css']
})
export class IndexRight implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'index-login',
  templateUrl: './login.html',
  styleUrls: ['../app.component.css']
})
export class IndexLogin implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  boolin = true;
  constructor() { }
  change() {
    this.childEvent.emit(this.boolin)
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'index-searchbox',
  templateUrl: './searchbox.html',
  styleUrls: ['../app.component.css']
})
export class IndexSeachbox implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'index-ballbetting',
  templateUrl: './ballbetting.html',
  styleUrls: ['../app.component.css']
})
export class IndexBallBetting implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'index-right_live',
  templateUrl: './right_live.html',
  styleUrls: ['../app.component.css']
})
export class IndexRightLive implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'index-sideoptions',
  templateUrl: './sideoptions.html',
  styleUrls: ['../app.component.css']
})
export class IndexSideOptions implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'index-encontainer',
  templateUrl: './encontainer.html',
  styleUrls: ['../app.component.css']
})
export class IndexEnContainer implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'index-content',
  templateUrl: './content.html',
  styleUrls: ['../app.component.css']
})
export class IndexContent implements OnInit {
  boolin = false;
  constructor() { }
  getChild(ChildValue) {
    this.boolin = ChildValue;
  }
  listen() {
    addEventListener("hashchange", () => {
      let url = '/index/indexcontent/indexright'
      if (location.hash = url) {
        this.boolin = false;
      }
    })
  }
  ngOnInit() {
    this.listen();
  }

}
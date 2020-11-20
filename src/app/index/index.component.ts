import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataBassService } from '../DataBass.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataBassService]
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
  boolin: any = [];
  total = 3;
  constructor() { }
  change(x) {
    for (let i = 0; i < this.total; i++) {
      this.boolin[i] = false;
      if (i == x) {
        this.boolin[i] = true;
      }
    }
  }
  listen() {
    addEventListener("hashchange", () => {
      if (location.hash = '/index/indexcontent/indexright') {
        this.boolin[0] = true;
        this.boolin[1] = false;
        this.boolin[2] = false;
      } else if (location.hash = '/index/discount') {
        this.boolin[0] = false;
        this.boolin[1] = true;
        this.boolin[2] = false;
      } else if (location.hash = '/index/member/memberright') {
        this.boolin[0] = false;
        this.boolin[1] = false;
        this.boolin[2] = true;
      }
    })
  }
  ngOnInit() {
    this.change(0)
    this.listen();
  }

}

@Component({
  selector: 'index-left',
  templateUrl: './left.html',
  styleUrls: ['../app.component.css']
})
export class IndexLeft implements OnInit {
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  @Output() popupEvent: EventEmitter<any> = new EventEmitter();

  boolin = true;
  left: any = [];
  constructor(private http: HttpClient, private Ajax: DataBassService) { }
  change() {
    this.childEvent.emit(this.boolin);
  }
  ngOnInit() {
    this.Ajax.getData('left').then(el => {
      this.left = el;
    })
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
  constructor() { }
  change() {
    this.childEvent.emit(true);
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
  popup = false;
  constructor(private router: Router) { }
  getChild(ChildValue) {
    this.boolin = ChildValue;
  }
  listen() {
    let url = '/index/indexcontent/indexright';
    let url1 = '/index/indexcontent/soccer/soccerbet';
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          event['url'] == url ? this.boolin = false : this.boolin = true;
          event['url'] == url1 ? this.popup = true : this.popup = false;
        }
        console.log(event['url'])
      })
  }
  ngOnInit() {
    this.listen();
  }

}

@Component({
  selector: 'skewers_popup',
  templateUrl: './skewers_popup.html',
  styleUrls: ['../app.component.css']
})
export class SkewersPopup implements OnInit {
  boolin = false;
  constructor() { }
  change() {
    this.boolin = !this.boolin;
  }
  ngOnInit() {
  }

}
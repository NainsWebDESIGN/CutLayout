import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataBassService } from '../DataBass.service';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

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
  pagetotal = 3;
  constructor(private location: Location, private router: Router) { }
  change(x) {
    for (let i = 0; i < this.pagetotal; i++) {
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
  pagehistory: any = [];
  boolin = true;
  left: any = [];
  total: any = [];
  constructor(private http: HttpClient, private Ajax: DataBassService, private router: Router) { }
  emit(ChildValue) {
    if (ChildValue.popupEvent) {
      ChildValue.popupEvent.subscribe(el => {
        this.popupEvent.emit(el);
      })
    }
    if (ChildValue.pageEvent) {
      ChildValue.pageEvent.subscribe(el => {
        this.back(el);
      })
    }
  }
  start() {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.total.push(event['url'])
        }
      })
  }
  back(x) {
    for (let i = 0; i < this.total.length; i++) {
      if (i == (this.total.length - 1)) {
        this.router.navigate([this.total[i + x]]);
      }
    }
    this.total = [];
    this.total.push('/index/indexcontent/indexright');
  }
  change() {
    this.childEvent.emit(this.boolin);
    this.popupEvent.emit(false);
  }
  ngOnInit() {
    this.Ajax.getData('left').then(el => {
      this.left = el;
    })
    this.total.push('/index/indexcontent/indexright');
    this.start()
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
  boolin = false;
  lis: any = [];
  searchtotal = 5;
  constructor() { }
  opensearch() {
    this.boolin = !this.boolin;
  }
  openli(x) {
    this.lis[x] = !this.lis[x];
  }
  closeli(x) {
    this.lis[x] = false;
  }
  ngOnInit() {
    for (let i = 0; i < this.searchtotal; i++) {
      this.lis[i] = false;
    }
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
  clicklive: any = [];
  startlive: any = [];
  iconbox = false;
  livebox: any = [];
  boxtotal = 2;
  ballbox: any = [];
  constructor() { }
  open(x) {
    if (this.clicklive[x] == true) {
      for (let i = 0; i < this.ballbox.length; i++) {
        this.clicklive[i] = false;
        this.startlive[i] = true;
      }
    } else if (this.clicklive[x] == false) {
      for (let i = 0; i < this.ballbox.length; i++) {
        this.startlive[i] = false;
        this.startlive[x] = true;
        this.clicklive[x] = true;
      }
    }
  }
  icon() {
    this.iconbox = !this.iconbox;
  }
  changebox(x) {
    for (let i = 0; i < this.boxtotal; i++) {
      this.livebox[i] = false;
      this.livebox[x] = true;
    }
  }
  start() {
    for (let i = 0; i < this.boxtotal; i++) {
      this.livebox[i] = false;
      this.livebox[0] = true;
    }
    let balltotal = document.getElementsByClassName('ball_wrap');
    for (let i = 0; i < balltotal.length; i++) {
      this.ballbox.push(balltotal[i]);
    }
    return this.ballbox;
  }
  async ngOnInit() {
    let data = await this.start();
    for (let i = 0; i < data.length; i++) {
      this.clicklive[i] = false;
      this.startlive[i] = false;
      this.clicklive[0] = true;
      this.startlive[0] = true;
    }
  }

}

@Component({
  selector: 'index-sideoptions',
  templateUrl: './sideoptions.html',
  styleUrls: ['../app.component.css']
})
export class IndexSideOptions implements OnInit {
  constructor(private router: Router) { }
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
  constructor(private router: Router, private reload: Location) { }
  getPopup(PopupValue) {
    this.popup = PopupValue;
  }
  getChild(ChildValue) {
    this.boolin = ChildValue;
  }
  listen() {
    let url = '/index/indexcontent/indexright';
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          event['url'] == url ? this.boolin = false : this.boolin = true;
        }
      })
    this.reload.path() == url ? this.boolin = false : this.boolin = true;
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
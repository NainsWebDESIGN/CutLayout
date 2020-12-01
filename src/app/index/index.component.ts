import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  SignIn = false;
  SignUp = false;
  LiveMode = false;
  constructor() { }
  signin(x) {
    this.SignIn = x;
  }
  signup(x) {
    this.SignIn = false;
    this.SignUp = x;
  }
  getLive(x) {
    this.SignIn = false;
    this.LiveMode = x;
  }
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
  doublebet = false;
  popup = false;
  betsolo = false;
  constructor(private router: Router, private reload: Location) { }
  double(x) {
    this.doublebet = x;
  }
  closeSolo(CloseValue) {
    this.betsolo = CloseValue;
  }
  getSolo(SoloValue) {
    this.betsolo = SoloValue;
  }
  getPopup(PopupValue) {
    this.popup = PopupValue;
  }
  getChild(ChildValue) {
    this.boolin = ChildValue;
  }
  listen() {
    let url = '/index/indexcontent/favorit';
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
  selector: 'index-header',
  templateUrl: './header.html',
  styleUrls: ['../app.component.css']
})
export class IndexHeader implements OnInit {
  LiveMode = false;
  today: any = new Date();
  boolin: any = [];
  pagetotal = 3;
  todayTimer = setInterval(() => { this.today = new Date(); }, 1000);
  @Input()
  set getLiveMode(boolean) {
    this.LiveMode = boolean;
  }
  @Output() signinEvent: EventEmitter<any> = new EventEmitter();
  @Output() signupEvent: EventEmitter<any> = new EventEmitter();
  @Output() signoutEvent: EventEmitter<any> = new EventEmitter();
  constructor(private location: Location, private router: Router, private reload: Location) { }
  SignIn() {
    this.signinEvent.emit(true);
  }
  SignUp() {
    this.signupEvent.emit(true);
  }
  SignOut() {
    this.signoutEvent.emit(false);
    this.LiveMode = false;
  }
  change(x) {
    for (let i = 0; i < this.pagetotal; i++) {
      this.boolin[i] = false;
    }
    this.boolin[x] = true;
  }
  listen() {
    let StrUrl = this.reload.path().toString().split('/');
    StrUrl[2] == 'indexcontent' ? this.boolin[0] = true : this.boolin[0] = false;
    StrUrl[2] == 'discount' ? this.boolin[1] = true : this.boolin[1] = false;
    StrUrl[2] == 'member' ? this.boolin[2] = true : this.boolin[2] = false;
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
  @Output() soloEvent: EventEmitter<any> = new EventEmitter();
  pagehistory: any = [];
  boolin = true;
  left: any = [];
  total: any = [];
  check: any = [];
  constructor(private http: HttpClient, private Ajax: DataBassService, private router: Router, private location: Location) { }
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
    if (ChildValue.soloEvent) {
      ChildValue.soloEvent.subscribe(el => {
        this.soloEvent.emit(el);
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
    this.total.push(this.location.path())
  }
  change(x) {
    this.childEvent.emit(this.boolin);
    this.popupEvent.emit(false);
    for (let i = 0; i < this.check.length; i++) {
      this.check[i] = false;
    }
    this.check[x] = true;
  }
  async listen() {
    let pagetotal = await this.getleft();
    for (let i = 0; i <= pagetotal.length; i++) {
      this.check[i] = false;
    }
    let a: any = [];
    a = await pagetotal.filter(el => {
      return el.router.indexOf(this.location.path()) > -1;
    })
    let NumberData = Number(a[0].CHID);
    this.check[NumberData] = true;
  }
  async getleft() {
    await this.Ajax.getData('Indexleft').then(el => {
      this.left = el;
    })
    return this.left;
  }
  async ngOnInit() {
    let data = await this.getleft();
    this.total.push(this.location.path());
    this.start()
    for (let i = 0; i <= data.length; i++) {
      this.check[i] = [];
    }
    this.listen();
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
  selector: 'index-signin',
  templateUrl: './sign-in.html',
  styleUrls: ['../app.component.css']
})
export class IndexSignin implements OnInit {
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();
  @Output() signupEvent: EventEmitter<any> = new EventEmitter();
  @Output() signinEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  SignIn() {
    this.signinEvent.emit(true);
  }
  close() {
    this.closeEvent.emit(false);
  }
  SignUp() {
    this.signupEvent.emit(true);
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'index-signup',
  templateUrl: './sign-up.html',
  styleUrls: ['../app.component.css']
})
export class IndexSignup implements OnInit {
  SignUp = false;
  SignUp_Ok = false;
  @Input()
  set getSignUp(boolean) {
    this.SignUp = boolean;
  }
  @Output() liveEvent: EventEmitter<any> = new EventEmitter();
  @Output() closeupEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  livemode() {
    this.liveEvent.emit(true);
  }
  close() {
    this.closeupEvent.emit(false);
    this.SignUp = false;
  }
  SignOk() {
    this.closeupEvent.emit(false);
    this.SignUp = false;
    this.SignUp_Ok = true;
  }
  closeOk() {
    this.SignUp_Ok = false;
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
  selector: 'skewers_popup',
  templateUrl: './skewers_popup.html',
  styleUrls: ['../app.component.css']
})
export class SkewersPopup implements OnInit {
  @Output() DoubleCheck: EventEmitter<any> = new EventEmitter();
  boolin = false;
  constructor() { }
  titleOpen() {
    this.boolin = !this.boolin;
  }
  double() {
    this.DoubleCheck.emit(true);
  }
  close() {
    this.boolin = false;
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'betsolo_popup',
  templateUrl: './betsolo_popup.html',
  styleUrls: ['../app.component.css']
})
export class BetsoloPopup implements OnInit {
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();
  check = true;
  constructor() { }
  closebet() {
    this.closeEvent.emit(false);
    this.check = true;
  }
  checkpage() {
    this.check = !this.check;
  }
  ngOnInit() {
  }

}
@Component({
  selector: 'doublebet',
  templateUrl: './doublebet.html',
  styleUrls: ['../app.component.css']
})
export class DoubleBet implements OnInit {
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }
  close() {
    this.closeEvent.emit(false);
  }
  ngOnInit() {
  }

}
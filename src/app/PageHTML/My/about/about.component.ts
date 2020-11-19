import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'about-header',
  templateUrl: './about_header.html',
  styleUrls: ['./about.component.css']
})
export class AboutHeader implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
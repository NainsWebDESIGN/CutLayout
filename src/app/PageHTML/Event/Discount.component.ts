import { Component, OnInit } from '@angular/core';
import { DataBassService } from './../../DataBass.service';

@Component({
  selector: 'app-Discount',
  templateUrl: './Discount.component.html',
  styleUrls: ['./Discount.component.css'],
  providers: [DataBassService]
})
export class DiscountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'Discount-left',
  templateUrl: './Discount-left.html',
  styleUrls: ['./Discount.component.css']
})
export class DiscountLeft implements OnInit {
  boolin: any = [];
  left: any = [];
  constructor(private Ajax: DataBassService) { }
  async getLeft() {
    return await this.Ajax.getData('Discountleft').then(el => {
      this.left = el;
      return el;
    })
  }
  async ngOnInit() {
    let data = await this.getLeft();
    for (let i = 0; i < data.length; i++) {
      this.boolin[i] = false;
    }
    this.boolin[0] = true;
  }

}

@Component({
  selector: 'Discount-content',
  templateUrl: './Discount-content.html',
  styleUrls: ['./Discount.component.css']
})
export class DiscountContent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'Discount-search',
  templateUrl: './Discount-search.html',
  styleUrls: ['./Discount.component.css']
})
export class DiscountSearch implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
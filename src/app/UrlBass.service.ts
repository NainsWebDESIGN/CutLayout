import { DataBassService } from './DataBass.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UrlBassService {

    constructor(private HTTP: DataBassService) { }
    async getIndex() {
        let data: any = [];
        await this.HTTP.getData('Indexleft').then(el => {
            data = el;
        })
        return data;
    }
    async getMember() {
        let data: any = [];
        await this.HTTP.getData('Memberleft').then(el => {
            data = el;
        })
        return data;
    }
    async getDiscount() {
        let data: any = [];
        await this.HTTP.getData('Discountleft').then(el => {
            data = el;
        })
        return data;
    }
    async changeurl(x) {
        let StrUrl = String(x).split('/');
        let data: any;
        if (StrUrl[2] == 'indexcontent') {
            data = await this.getIndex();
        }
        if (StrUrl[2] == 'member') {
            data = await this.getMember();
        }
        if (StrUrl[2] == 'discount') {
            data = await this.getDiscount();
        }
        let a = data.filter(el => {
            return el.router.indexOf(x) > -1;
        })
        return a[0].CHID;
    }
}

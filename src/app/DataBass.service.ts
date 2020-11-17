import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataBassService {
    constructor(private http: HttpClient) { }
    getData(x) {
        return this.http.get('assets/json/databass.json').toPromise().then(el => {
            return el[x]
        });
    }
}

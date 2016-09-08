import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()

export class ItemService{
    dataUrl:string='app/data/data.json';
    constructor(private http: Http) {}
    
    getItems(): Observable<Object[]> {
    return this.http.get(this.dataUrl)
            .map(response => response.json().data);
            
               
  }

}
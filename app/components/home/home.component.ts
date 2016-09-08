import { Component, Input, trigger, state, style, transition, animate, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'home-data',
  template: `
  <div class="row items">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 item-container" *ngFor="let item of items | slice:0:this.displayLimit; let i = index" [@itemState]="'in'" >
      <div class="item" title="{{item.name}}">
        <div class="info-top col-xs-4 col-sm-4 col-md-5 col-lg-6">
          <div class="col-xs-4 col-sm-4 col-md-4 counter">{{i+1}}</div>
          <div *ngIf="item.offer" class="col-xs-8 col-sm-8 col-md-8 offer">{{item.offer}}</div>
        </div>
        <div class="itemimage" [ngStyle]="{'background-image': 'url(' + this.path + (this.item.image ? this.item.image : defaultIcon )+ ')'}"></div>
        <div class="info-block">
          <div class="col-md-12 name text-info">{{item.name}} </div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 price text-muted">{{item.price + ':-'}}</div>
          <div class="rating" title="{{item.rating}}"><div class="layer" [ngStyle]="{'width':(100 - (( (item.rating > 5 ? 5 : item.rating ) /5) *100))+'%'}"></div></div>
          
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 item-container" *ngIf="displayLimit < items.length">
      <div class="item" (click)="loadMore()">
        <div class="itemimage viewmore"></div>
      </div>
    </div>

  </div>
  `,
  animations: [
    trigger('itemState', [
      state('*',   style({
        transition: 'all 0.5s ease',
        transform: 'scale(0.9)'
      })),
      transition('* => in',animate('500ms ease-out'))
    ])
  ]
})

export class HomeComponent implements OnInit{
	 componentName: 'HomeComponent';
   items:Object[] = [];
   defaultIcon:string = 'default.jpg';
   path:string = 'app/assets/img/';
   displayLimit:number=11;
   errorMessage:string;

    // Inject Service and assign it to _itemService
    constructor(private _itemService: ItemService) {}
    ngOnInit(){
      this._itemService.getItems().subscribe(
    items=>this.items = items,
    error => this.errorMessage= <any>error);
    }

    loadMore(){
    console.log(Object.keys(this.items).length);
    this.displayLimit+=10;
    }
}

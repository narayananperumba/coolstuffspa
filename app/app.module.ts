import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http'


import { AppComponent }   from './app.component';
import { HomeComponent }   from './components/home/home.component';
import { HeaderComponent }   from './components/header/header.component';
import { ItemService } from './services/item.service';
@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, HeaderComponent, HomeComponent],
  providers: 	[ItemService],
  bootstrap:    [ AppComponent]
})
export class AppModule { }

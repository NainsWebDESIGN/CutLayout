import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RoutingModule } from './Routes.routing';
import { ErrorComponent } from './Error/Error.component';
import {
  IndexComponent, IndexHeader, IndexLeft, IndexRight, IndexLogin,
  IndexSeachbox, IndexBallBetting, IndexRightLive, IndexSideOptions
} from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    IndexComponent,
    IndexHeader,
    IndexLeft,
    IndexRight,
    IndexLogin,
    IndexSeachbox,
    IndexBallBetting,
    IndexRightLive,
    IndexSideOptions
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

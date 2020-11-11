import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RoutingModule } from './Routes.routing';
import { ErrorComponent } from './Error/Error.component';
import {
  IndexComponent, IndexHeader, IndexLeft,
  IndexRight, IndexLogin, IndexSeachbox,
  IndexBallBetting, IndexRightLive,
  IndexSideOptions, IndexEnContainer
} from './index/index.component';
import { DiscountComponent } from './Discount/Discount.component';
import { MemberComponent } from './Member/Member.component';
import { SoccerComponent } from './Ball/soccer/soccer.component';
import { BasballComponent } from './Ball/basball/basball.component';
import { BasketballComponent } from './Ball/basketball/basketball.component';
import { Horse_raceComponent } from './Ball/horse_race/horse_race.component';
import { EspComponent } from './Ball/esp/esp.component';
import { StockComponent } from './Ball/stock/stock.component';
import { LotteryComponent } from './Ball/lottery/lottery.component';
import { Ice_ballComponent } from './Ball/ice_ball/ice_ball.component';


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
    IndexSideOptions,
    IndexEnContainer,
    DiscountComponent,
    MemberComponent,
    SoccerComponent,
    BasballComponent,
    BasketballComponent,
    Horse_raceComponent,
    EspComponent,
    StockComponent,
    LotteryComponent,
    Ice_ballComponent
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

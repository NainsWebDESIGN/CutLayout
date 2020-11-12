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
import { DiscountComponent } from './pageHTML/My/Discount.component';
import { MemberComponent } from './pageHTML/Member/Member.component';
import { SoccerComponent } from './pageHTML/Ball/soccer/soccer.component';
import { BasballComponent } from './pageHTML/Ball/basball/basball.component';
import { BasketballComponent } from './pageHTML/Ball/basketball/basketball.component';
import { Horse_raceComponent } from './pageHTML/Ball/horse_race/horse_race.component';
import { EspComponent } from './pageHTML/Ball/esp/esp.component';
import { StockComponent } from './pageHTML/Ball/stock/stock.component';
import { LotteryComponent } from './pageHTML/Ball/lottery/lottery.component';
import { Ice_ballComponent } from './pageHTML/Ball/ice_ball/ice_ball.component';
import { TennisComponent } from './pageHTML/Ball/tennis/tennis.component';
import { SnookerComponent } from './pageHTML/Ball/snooker/snooker.component';
import { V_ballComponent } from './pageHTML/Ball/v_ball/v_ball.component';
import { MortorComponent } from './pageHTML/Ball/mortor/mortor.component';
import { BadmintonComponent } from './pageHTML/Ball/badminton/badminton.component';
import { FootballComponent } from './pageHTML/Ball/football/football.component';
import { BsoComponent } from './pageHTML/Ball/bso/bso.component';
import { Table_ballComponent } from './pageHTML/Ball/table_ball/table_ball.component';
import { Bill_saveComponent } from './pageHTML/MyMenber/bill_save/bill_save.component';


@NgModule({
  declarations: [
    AppComponent, ErrorComponent, IndexComponent, IndexHeader, IndexLeft,
    IndexRight, IndexLogin, IndexSeachbox, IndexBallBetting,
    IndexRightLive, IndexSideOptions, IndexEnContainer, DiscountComponent,
    MemberComponent, SoccerComponent, BasballComponent, BasketballComponent,
    Horse_raceComponent, EspComponent, StockComponent, LotteryComponent,
    Ice_ballComponent, TennisComponent, SnookerComponent, V_ballComponent,
    MortorComponent, BadmintonComponent, FootballComponent, BsoComponent,
    Table_ballComponent, Bill_saveComponent
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

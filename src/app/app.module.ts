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
import { DiscountComponent } from './PageHTML/Event/Discount.component';
import { MemberComponent } from './pageHTML/My/Member/Member.component';
import { SoccerComponent } from './pageHTML/Balls/soccer/soccer.component';
import { BasballComponent } from './pageHTML/Balls/basball/basball.component';
import { BasketballComponent } from './pageHTML/Balls/basketball/basketball.component';
import { Horse_raceComponent } from './pageHTML/Balls/horse_race/horse_race.component';
import { EspComponent } from './pageHTML/Balls/esp/esp.component';
import { StockComponent } from './pageHTML/Balls/stock/stock.component';
import { LotteryComponent } from './pageHTML/Balls/lottery/lottery.component';
import { Ice_ballComponent } from './pageHTML/Balls/ice_ball/ice_ball.component';
import { TennisComponent } from './pageHTML/Balls/tennis/tennis.component';
import { SnookerComponent } from './pageHTML/Balls/snooker/snooker.component';
import { V_ballComponent } from './pageHTML/Balls/v_ball/v_ball.component';
import { MortorComponent } from './pageHTML/Balls/mortor/mortor.component';
import { BadmintonComponent } from './pageHTML/Balls/badminton/badminton.component';
import { FootballComponent } from './pageHTML/Balls/football/football.component';
import { BsoComponent } from './pageHTML/Balls/bso/bso.component';
import { Table_ballComponent } from './pageHTML/Balls/table_ball/table_ball.component';
import { Bill_saveComponent } from './pageHTML/My/bill_save/bill_save.component';


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

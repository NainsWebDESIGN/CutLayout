import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Error/Error.component';
import { IndexComponent } from './index/index.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: '404', component: ErrorComponent },
  { path: 'discount', component: DiscountComponent },
  { path: 'member', component: MemberComponent },
  { path: 'soccer', component: SoccerComponent },
  { path: 'basball', component: BasballComponent },
  { path: 'basketball', component: BasketballComponent },
  { path: 'horse', component: Horse_raceComponent },
  { path: 'esp', component: EspComponent },
  { path: 'stock', component: StockComponent },
  { path: 'lottery', component: LotteryComponent },
  { path: 'iceball', component: Ice_ballComponent },
  { path: 'tennis', component: TennisComponent },
  { path: 'snooker', component: SnookerComponent },
  { path: 'vball', component: V_ballComponent },
  { path: 'mortor', component: MortorComponent },
  { path: 'badminton', component: BadmintonComponent },
  { path: 'football', component: FootballComponent },
  { path: 'bso', component: BsoComponent },
  { path: 'tableball', component: Table_ballComponent },
  { path: 'billsave', component: Bill_saveComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule {

}

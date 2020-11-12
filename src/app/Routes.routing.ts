import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Error/Error.component';
import { IndexComponent } from './index/index.component';
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
import { Soccer_betComponent } from './PageHTML/Special/soccer_bet/soccer_bet.component';
import { Soccer_resaultComponent } from './PageHTML/Balls/soccer_resault/soccer_resault.component';
import { Soccer_innerComponent } from './PageHTML/Balls/soccer_inner/soccer_inner.component';
import { Basketball_innerComponent } from './PageHTML/Balls/basketball_inner/basketball_inner.component';
import { HelpComponent } from './PageHTML/My/help/help.component';
import { Contact_us_sevComponent } from './PageHTML/My/Contact_us_sev/Contact_us_sev.component';
import { Download_appComponent } from './PageHTML/My/download_app/download_app.component';
import { Bill_transComponent } from './PageHTML/My/bill_trans/bill_trans.component';
import { Bill_trans_recordComponent } from './PageHTML/My/bill_trans_record/bill_trans_record.component';
import { Bill_recordComponent } from './PageHTML/My/bill_record/bill_record.component';

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
  { path: 'soccerbet', component: Soccer_betComponent },
  { path: 'soccerresault', component: Soccer_resaultComponent },
  { path: 'soccerinner', component: Soccer_innerComponent },
  { path: 'basketballinner', component: Basketball_innerComponent },
  { path: 'help', component: HelpComponent },
  { path: 'contactus', component: Contact_us_sevComponent },
  { path: 'download', component: Download_appComponent },
  { path: 'billtrans', component: Bill_transComponent },
  { path: 'billtransrecord', component: Bill_trans_recordComponent },
  { path: 'billrecord', component: Bill_recordComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule {

}

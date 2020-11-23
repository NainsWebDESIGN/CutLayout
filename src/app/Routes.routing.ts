import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './Error/Error.component';
import { IndexComponent, IndexRight, IndexContent } from './index/index.component';
import { DiscountComponent } from './PageHTML/Event/Discount.component';
import { MemberComponent, MemberRight } from './pageHTML/My/Member/Member.component';
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
import { Soccer_innerComponent } from './PageHTML/Balls/soccer_inner/soccer_inner.component';
import { Basketball_innerComponent } from './PageHTML/Balls/basketball_inner/basketball_inner.component';
import { HelpComponent } from './PageHTML/My/help/help.component';
import { Contact_us_sevComponent } from './PageHTML/My/Contact_us_sev/Contact_us_sev.component';
import { Download_appComponent } from './PageHTML/My/download_app/download_app.component';
import { Bill_transComponent } from './PageHTML/My/bill_trans/bill_trans.component';
import { Bill_trans_recordComponent, Tr_RecordBox, TransFor, TakeOut } from './PageHTML/My/bill_trans_record/bill_trans_record.component';
import { Bill_recordComponent } from './PageHTML/My/bill_record/bill_record.component';
import { My_bill_saveComponent } from './PageHTML/My/bill_save/My_bill_save.component';
import { My_bill_moneybagComponent } from './PageHTML/My/bill_moneybag/My_bill_moneybag.component';
import { Bill_getcashComponent } from './PageHTML/My/bill_getcash/bill_getcash.component';
import { Bill_nowComponent } from './PageHTML/My/bill_now/bill_now.component';
import { MessageComponent } from './PageHTML/My/message/message.component';
import { SetComponent } from './PageHTML/My/set/set.component';
import { AboutComponent } from './PageHTML/My/about/about.component';
import { Join_usComponent } from './PageHTML/My/join_us/join_us.component';

const routes: Routes = [
  { path: '', redirectTo: '/index/indexcontent/indexright', pathMatch: 'full' },
  {
    path: 'index', component: IndexComponent,
    children: [
      {
        path: 'indexcontent', component: IndexContent,
        children: [
          { path: 'indexright', component: IndexRight },
          { path: 'tableball', component: Table_ballComponent },
          { path: 'basball', component: BasballComponent },
          { path: 'soccer', component: SoccerComponent },
          { path: 'basketball', component: BasketballComponent },
          { path: 'horse', component: Horse_raceComponent },
          { path: 'esp', component: EspComponent },
          { path: 'lottery', component: LotteryComponent },
          { path: 'stock', component: StockComponent },
          { path: 'iceball', component: Ice_ballComponent },
          { path: 'tennis', component: TennisComponent },
          { path: 'snooker', component: SnookerComponent },
          { path: 'vball', component: V_ballComponent },
          { path: 'mortor', component: MortorComponent },
          { path: 'badminton', component: BadmintonComponent },
          { path: 'football', component: FootballComponent },
          { path: 'bso', component: BsoComponent },
          { path: 'basketballinner', component: Basketball_innerComponent },
          { path: 'soccerinner', component: Soccer_innerComponent },
        ]
      },
      { path: 'discount', component: DiscountComponent },
      {
        path: 'member', component: MemberComponent,
        children: [
          { path: '', redirectTo: '/index/member/memberright', pathMatch: 'full' },
          { path: 'memberright', component: MemberRight },
          { path: 'mybillsave', component: My_bill_saveComponent },
          { path: 'moneybag', component: My_bill_moneybagComponent },
          { path: 'billtrans', component: Bill_transComponent },
          { path: 'getcash', component: Bill_getcashComponent },
          {
            path: 'transrecord', component: Bill_trans_recordComponent,
            children: [
              { path: '', redirectTo: '/index/member/transrecord/recordbox', pathMatch: 'full' },
              { path: 'recordbox', component: Tr_RecordBox },
              { path: 'transfor', component: TransFor },
              { path: 'takeout', component: TakeOut },
            ]
          },
          { path: 'billnow', component: Bill_nowComponent },
          { path: 'billrecord', component: Bill_recordComponent },
          { path: 'help', component: HelpComponent },
          { path: 'contactus', component: Contact_us_sevComponent },
          { path: 'message', component: MessageComponent },
          { path: 'set', component: SetComponent },
          { path: 'about', component: AboutComponent },
          { path: 'joinus', component: Join_usComponent },
          { path: 'download', component: Download_appComponent },
        ]
      },
    ]
  },
  { path: '404', component: ErrorComponent },
  { path: 'billtrans', component: Bill_transComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule {

}

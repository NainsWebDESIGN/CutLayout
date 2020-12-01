import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './Error/Error.component';
import { IndexComponent, IndexRight, IndexContent } from './index/index.component';
import { DiscountComponent } from './PageHTML/Event/Discount.component';
import { MemberComponent, MemberRight } from './pageHTML/My/Member/Member.component';
import { SoccerComponent } from './pageHTML/Balls/soccer.component/soccer/soccer.component';
import { BasballComponent } from './PageHTML/Balls/basball.component/basball/basball.component';
import { BasketballComponent } from './PageHTML/Balls/basketball.component/basketball/basketball.component';
import { Horse_raceComponent } from './PageHTML/Balls/horse.component/horse_race/horse_race.component';
import { EspComponent } from './PageHTML/Balls/esp.component/esp/esp.component';
import { StockComponent } from './PageHTML/Balls/stock.component/stock/stock.component';
import { LottinnerComponent } from './PageHTML/Balls/lottery.component/lottery_inner/lottinner.component';
import { Ice_InnerComponent } from './pageHTML/Balls/iceball.component/iceball_inner/ice_inner.component';
import { TennisinnerComponent } from './PageHTML/Balls/tennis.component/tennis_inner/tennisinner.component';
import { SnookerinnerComponent } from './PageHTML/Balls/snooker.component/snooker_inner/snookerinner.component';
import { Vball_innerComponent } from './PageHTML/Balls/vball.component/vball_inner/vball_inner.component';
import { MortorComponent } from './PageHTML/Balls/mortor.component/mortor/mortor.component';
import { BadmintoninnerComponent } from './PageHTML/Balls/badminton.component/badminton_inner/badmintoninner.component';
import { FootballinnerComponent } from './PageHTML/Balls/football.component/football_inner/footballinner.component';
import { BsoinnerComponent } from './PageHTML/Balls/bso.component/bso_inner/bsoinner.component';
import { Tableball_innerComponent } from './PageHTML/Balls/tableball.component/tableball_inner/tableball_inner.component';
import { Soccer_innerComponent } from './PageHTML/Balls/soccer.component/soccer_inner/soccer_inner.component';
import { Basketball_innerComponent } from './PageHTML/Balls/basketball.Component/basketball_inner/basketball_inner.component';
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
import { LotteryComponent } from './PageHTML/Balls/lottery.component/lottery/lottery.component';
import { IceballComponent } from './PageHTML/Balls/iceball.component/iceball/iceball.component';
import { TennisComponent } from './PageHTML/Balls/tennis.component/tennis/tennis.component';
import { SnookerComponent } from './PageHTML/Balls/snooker.component/snooker/snooker.component';
import { VballComponent } from './PageHTML/Balls/vball.component/vball/vball.component';
import { BadmintonComponent } from './PageHTML/Balls/badminton.component/badminton/badminton.component';
import { FootballComponent } from './PageHTML/Balls/football.component/football/football.component';
import { BsoComponent } from './PageHTML/Balls/bso.component/bso/bso.component';
import { TableballComponent } from './PageHTML/Balls/tableball.component/tableball/tableball.component';
import { Basball_innerComponent } from './PageHTML/Balls/basball.component/basball_inner/basball_inner.component';
import { Esp_innerComponent } from './PageHTML/Balls/esp.component/esp_inner/esp_inner.component';
import { Horserace_innerComponent } from './PageHTML/Balls/horse.component/horserace_inner/horserace_inner.component';
import { Stock_innerComponent } from './PageHTML/Balls/stock.component/stock_inner/stock_inner.component';

const routes: Routes = [
  { path: '', redirectTo: '/index/indexcontent/favorit', pathMatch: 'full' },
  {
    path: 'index', component: IndexComponent,
    children: [
      {
        path: 'indexcontent', component: IndexContent,
        children: [
          { path: 'favorit', component: IndexRight },
          { path: 'popular', component: SoccerComponent },
          { path: 'badminton', component: BadmintonComponent },
          { path: 'badmintoninner', component: BadmintoninnerComponent },
          { path: 'basball', component: BasballComponent },
          { path: 'basballinner', component: Basball_innerComponent },
          { path: 'basketball', component: BasketballComponent },
          { path: 'basketballinner', component: Basketball_innerComponent },
          { path: 'bso', component: BsoComponent },
          { path: 'bsoinner', component: BsoinnerComponent },
          { path: 'esp', component: EspComponent },
          { path: 'espinner', component: Esp_innerComponent },
          { path: 'football', component: FootballComponent },
          { path: 'footballinner', component: FootballinnerComponent },
          { path: 'horse', component: Horse_raceComponent },
          { path: 'horseinner', component: Horserace_innerComponent },
          { path: 'iceball', component: IceballComponent },
          { path: 'iceballinner', component: Ice_InnerComponent },
          { path: 'lottery', component: LotteryComponent },
          { path: 'lotteryinner', component: LottinnerComponent },
          { path: 'mortor', component: MortorComponent },
          { path: 'snooker', component: SnookerComponent },
          { path: 'snookerinner', component: SnookerinnerComponent },
          { path: 'soccer', component: SoccerComponent },
          { path: 'soccerinner', component: Soccer_innerComponent },
          { path: 'stock', component: StockComponent },
          { path: 'stockinner', component: Stock_innerComponent },
          { path: 'tableball', component: TableballComponent },
          { path: 'tableballinner', component: Tableball_innerComponent },
          { path: 'tennis', component: TennisComponent },
          { path: 'tennisinner', component: TennisinnerComponent },
          { path: 'vball', component: VballComponent },
          { path: 'vballinner', component: Vball_innerComponent },
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
          { path: 'transrecord', component: Bill_trans_recordComponent },
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
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule {

}

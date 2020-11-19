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
  IndexSideOptions, IndexEnContainer,
  IndexContent
} from './index/index.component';
import { DiscountComponent } from './PageHTML/Event/Discount.component';
import {
  MemberComponent, MemberRight, MemberOption,
  MemberLeft, GetCashPopup, AddCard
} from './pageHTML/My/Member/Member.component';
import { SoccerComponent, SoccerRight, SoccerHeader, SoccerContent } from './pageHTML/Balls/soccer/soccer.component';
import { BasballComponent, BasballHeader, BasballContent, BasballRight } from './pageHTML/Balls/basball/basball.component';
import { BasketballComponent, BasketballHeader, BasketballContent, BasketballRight } from './pageHTML/Balls/basketball/basketball.component';
import { Horse_raceComponent, HorseRight, HorseHeader, HorseContent } from './pageHTML/Balls/horse_race/horse_race.component';
import { EspComponent, EspRight, EspHeader, EspContent } from './pageHTML/Balls/esp/esp.component';
import { StockComponent } from './pageHTML/Balls/stock/stock.component';
import { LotteryComponent, LotteryRight, LotteryHeader, LotteryContent } from './pageHTML/Balls/lottery/lottery.component';
import { Ice_ballComponent, IceRight, IceHeader, IceContent } from './pageHTML/Balls/ice_ball/ice_ball.component';
import { TennisComponent } from './pageHTML/Balls/tennis/tennis.component';
import { SnookerComponent, SnookerRight, SnookerHeader, SnookerContent } from './pageHTML/Balls/snooker/snooker.component';
import { V_ballComponent } from './pageHTML/Balls/v_ball/v_ball.component';
import { MortorComponent, MortorRight, MortorHeader, MortorContent } from './pageHTML/Balls/mortor/mortor.component';
import { BadmintonComponent, BadmintonHeader, BadmintonContent, BadmintonRight } from './pageHTML/Balls/badminton/badminton.component';
import { FootballComponent, FootballRight, FootballHeader, FootballContent } from './pageHTML/Balls/football/football.component';
import { BsoComponent, BsoHeader, BsoContent, BsoRight } from './pageHTML/Balls/bso/bso.component';
import { Table_ballComponent } from './pageHTML/Balls/table_ball/table_ball.component';
import { Soccer_betComponent } from './PageHTML/Special/soccer_bet/soccer_bet.component';
import { Soccer_resaultComponent } from './PageHTML/Balls/soccer_resault/soccer_resault.component';
import { Soccer_innerComponent, SoinnerRight, SoinnerHeader, SoinnerContent } from './PageHTML/Balls/soccer_inner/soccer_inner.component';
import { Basketball_innerComponent, BasketRight, BasketHeader, BasketContent } from './PageHTML/Balls/basketball_inner/basketball_inner.component';
import { HelpComponent, HelpHeader, HelpSave, HelpTrans, HelpCash, HelpBet, HelpRules, HelpSup } from './PageHTML/My/help/help.component';
import { Contact_us_sevComponent, ContactHeader, ContactMessage, ContactEvents, ContactAnno, ContactGameAnno } from './PageHTML/My/Contact_us_sev/Contact_us_sev.component';
import { Download_appComponent, DownloadHeader, DownloadContent } from './PageHTML/My/download_app/download_app.component';
import { Bill_transComponent, TransHeader } from './PageHTML/My/bill_trans/bill_trans.component';
import { Bill_trans_recordComponent, Tr_RecordBox, TransFor, TakeOut } from './PageHTML/My/bill_trans_record/bill_trans_record.component';
import { Bill_recordComponent, BillRecordHeader } from './PageHTML/My/bill_record/bill_record.component';
import { My_bill_saveComponent, BillSaveHeader } from './PageHTML/My/bill_save/My_bill_save.component';
import { My_bill_moneybagComponent, MoneyBagHeader } from './PageHTML/My/bill_moneybag/My_bill_moneybag.component';
import { Bill_getcashComponent, GetCashHeader } from './PageHTML/My/bill_getcash/bill_getcash.component';
import { Bill_nowComponent, NowHeader } from './PageHTML/My/bill_now/bill_now.component';
import { MessageComponent, MessageHeader, MessageMessage, MessageEvents, MessageAnno, MessageGameAnno } from './PageHTML/My/message/message.component';
import { SetComponent, SetHeader } from './PageHTML/My/set/set.component';
import { AboutComponent, AboutHeader, AboutAbout, AboutLink } from './PageHTML/My/about/about.component';
import { Join_usComponent, JoinHeader } from './PageHTML/My/join_us/join_us.component';


@NgModule({
  declarations: [
    AppComponent, ErrorComponent, IndexComponent, IndexHeader, IndexLeft,
    IndexRight, IndexLogin, IndexSeachbox, IndexBallBetting, BasketballContent,
    IndexRightLive, IndexSideOptions, IndexEnContainer, DiscountComponent,
    MemberComponent, SoccerComponent, BasballComponent, BasketballComponent,
    Horse_raceComponent, EspComponent, StockComponent, LotteryComponent,
    Ice_ballComponent, TennisComponent, SnookerComponent, V_ballComponent,
    MortorComponent, BadmintonComponent, FootballComponent, BsoComponent,
    Table_ballComponent, Soccer_betComponent, My_bill_moneybagComponent,
    Soccer_resaultComponent, Soccer_innerComponent, Basketball_innerComponent,
    HelpComponent, Contact_us_sevComponent, Download_appComponent, BasketballRight,
    Bill_transComponent, Bill_trans_recordComponent, Bill_recordComponent,
    IndexContent, MemberRight, MemberOption, MemberLeft, My_bill_saveComponent,
    BillSaveHeader, TransHeader, Bill_getcashComponent, GetCashPopup, BsoContent,
    GetCashHeader, AddCard, MoneyBagHeader, Tr_RecordBox, TransFor, BsoHeader,
    TakeOut, Bill_nowComponent, NowHeader, Bill_recordComponent, BillRecordHeader,
    HelpHeader, HelpSave, HelpTrans, HelpCash, HelpBet, HelpRules, HelpSup,
    ContactHeader, ContactMessage, ContactEvents, ContactAnno, ContactGameAnno,
    MessageComponent, MessageHeader, MessageMessage, MessageEvents, MessageAnno,
    MessageGameAnno, SetComponent, SetHeader, AboutComponent, AboutHeader,
    AboutAbout, AboutLink, Join_usComponent, JoinHeader, DownloadHeader,
    DownloadContent, BadmintonHeader, BadmintonContent, BadmintonRight,
    BasballHeader, BasballContent, BasballRight, BasketballHeader, BsoRight,
    EspRight, EspHeader, EspContent, FootballRight, FootballHeader, FootballContent,
    HorseRight, HorseHeader, HorseContent, IceRight, IceHeader, IceContent,
    LotteryRight, LotteryHeader, LotteryContent, MortorRight, MortorHeader, MortorContent,
    SnookerRight, SnookerHeader, SnookerContent, SoccerRight, SoccerHeader, SoccerContent,
    BasketRight, BasketHeader, BasketContent, SoinnerRight, SoinnerHeader, SoinnerContent
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

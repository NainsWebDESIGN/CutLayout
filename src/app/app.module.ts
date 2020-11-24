import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
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
  IndexContent, SkewersPopup
} from './index/index.component';
import { DiscountComponent } from './PageHTML/Event/Discount.component';
import {
  MemberComponent, MemberRight, MemberOption,
  MemberLeft, GetCashPopup, AddCard
} from './pageHTML/My/Member/Member.component';
import { SoccerComponent, SoccerRight, SoccerHeader, SoccerContent, SoTeach, SoBet, SoResult } from './pageHTML/Balls/soccer/soccer.component';
import { BasballComponent, BasballHeader, BasballContent, BasballRight, BasTeach, BasBet, BasResult } from './pageHTML/Balls/basball/basball.component';
import { BasketballComponent, BasketballHeader, BasketballContent, BasketballRight, BasketTeach, BasketResult, BasketBet } from './pageHTML/Balls/basketball/basketball.component';
import { Horse_raceComponent, HorseRight, HorseHeader, HorseContent, HorseResult, HorseBet } from './pageHTML/Balls/horse_race/horse_race.component';
import { EspComponent, EspRight, EspHeader, EspContent, EspResult, EspBet } from './pageHTML/Balls/esp/esp.component';
import { StockComponent, StockHeader, StockRight, StockContent, StResult, StBet } from './pageHTML/Balls/stock/stock.component';
import { LottinnerComponent, LottinnerRight, LottinnerHeader, LottinnerContent } from './PageHTML/Balls/lottery_inner/lottinner.component';
import { Ice_InnerComponent, IceinnerContent, IceinnerHeader, IceinnerRight } from './pageHTML/Balls/iceball_inner/ice_inner.component';
import { TennisinnerRight, TennisinnerComponent, TennisinnerContent, TennisinnerHeader } from './PageHTML/Balls/tennis_inner/tennisinner.component';
import { SnookerinnerComponent, SnookerinnerContent, SnookerinnerHeader, SnookerinnerRight } from './PageHTML/Balls/snooker_inner/snookerinner.component';
import { Vball_innerComponent, VballinnerContent, VballinnerHeader, VballinnerRight } from './PageHTML/Balls/vball_inner/vball_inner.component';
import { MortorComponent, MortorRight, MortorHeader, MortorContent } from './pageHTML/Balls/mortor/mortor.component';
import { BadmintoninnerComponent, BadmintoninnerContent, BadmintoninnerHeader, BadmintoninnerRight } from './PageHTML/Balls/badminton_inner/badmintoninner.component';
import { FootballinnerComponent, FootballinnerContent, FootballinnerHeader, FootballinnerRight } from './PageHTML/Balls/football_inner/footballinner.component';
import { BsoinnerComponent, BsoinnerContent, BsoinnerHeader, BsoinnerRight } from './PageHTML/Balls/bso_inner/bsoinner.component';
import { Tableball_innerComponent, TableinnerContent, TableinnerHeader, TableinnerRight } from './PageHTML/Balls/tableball_inner/tableball_inner.component';
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
import { Soteach_bsComponent } from './PageHTML/Balls/soteach_bs/soteach_bs.component';
import { LotteryComponent, LotteryHeader, LotteryContent, LotteryRight, LotteryResult, LotteryBet } from './PageHTML/Balls/lottery/lottery.component';
import { IceContent, IceHeader, IceRight, IceballComponent, IceResult, IceBet } from './PageHTML/Balls/iceball/iceball.component';
import { TennisComponent, TennisContent, TennisHeader, TennisRight, TennisResult, TennisBet } from './PageHTML/Balls/tennis/tennis.component';
import { SnookerComponent, SnookerHeader, SnookerContent, SnookerRight, SnookerResult, SnookerBet } from './PageHTML/Balls/snooker/snooker.component';
import { VballComponent, VballContent, VballHeader, VballRight, VballResult, VballBet } from './PageHTML/Balls/vball/vball.component';
import { BadmintonComponent, BadmintonContent, BadmintonHeader, BadmintonRight, BadmintonResult, BadmintonBet } from './PageHTML/Balls/badminton/badminton.component';
import { FootballComponent, FootballHeader, FootballContent, FootballRight, FootballResult, FootballBet } from './PageHTML/Balls/football/football.component';
import { BsoComponent, BsoBet, BsoContent, BsoHeader, BsoResult, BsoRight } from './PageHTML/Balls/bso/bso.component';
import { TableballComponent, TableballBet, TableballContent, TableballHeader, TableballResult, TableballRight } from './PageHTML/Balls/tableball/tableball.component';


@NgModule({
  declarations: [
    AppComponent, ErrorComponent, IndexComponent, IndexHeader, IndexLeft, IndexBallBetting, BasketballContent, FootballRight,
    IndexRight, IndexLogin, IndexSeachbox, IndexEnContainer, DiscountComponent, BasketballComponent, BsoinnerHeader, BsoContent,
    IndexRightLive, IndexSideOptions, MemberComponent, SoccerComponent, BasballComponent, LottinnerComponent, HelpBet, BsoBet,
    Horse_raceComponent, EspComponent, StockComponent, TransFor, IceinnerContent, TennisinnerComponent, SnookerinnerComponent,
    MortorComponent, My_bill_moneybagComponent, VballinnerContent, BadmintoninnerRight, FootballinnerHeader, FootballContent,
    Soccer_innerComponent, Basketball_innerComponent, BasTeach, BasBet, BasResult, SoResult, TableinnerRight, FootballHeader,
    HelpComponent, Contact_us_sevComponent, Download_appComponent, BasketballRight, Bill_recordComponent, BsoinnerComponent,
    Bill_transComponent, Bill_trans_recordComponent, IndexContent, MemberRight, MemberOption, MemberLeft, SoccerContent,
    BillSaveHeader, TransHeader, Bill_getcashComponent, GetCashPopup, GetCashHeader, AddCard, MoneyBagHeader, Tr_RecordBox,
    TakeOut, Bill_nowComponent, NowHeader, BillRecordHeader, HelpHeader, HelpSave, HelpTrans, HelpCash, HelpRules, HelpSup,
    ContactHeader, ContactMessage, ContactEvents, ContactAnno, ContactGameAnno, MessageEvents, MessageAnno, MessageMessage,
    MessageComponent, MessageHeader, MessageGameAnno, SetComponent, SetHeader, AboutComponent, AboutHeader, DownloadHeader,
    AboutAbout, AboutLink, Join_usComponent, JoinHeader, BadmintoninnerComponent, BadmintoninnerContent, TableinnerHeader,
    DownloadContent, BasballHeader, BasballContent, BasballRight, BasketballHeader, FootballinnerComponent, FootballinnerContent,
    EspRight, EspHeader, EspContent, HorseRight, HorseHeader, IceinnerRight, IceinnerHeader, TableinnerContent, FootballinnerRight,
    HorseContent, LottinnerRight, LottinnerHeader, LottinnerContent, MortorRight, MortorHeader, MortorContent, SoccerRight,
    SoccerHeader, My_bill_saveComponent, SoinnerHeader, SoinnerContent, SnookerinnerRight, SnookerinnerContent, SnookerinnerHeader,
    BasketRight, BasketHeader, BasketContent, SoinnerRight, StockHeader, StockRight, StockContent, SkewersPopup, Tableball_innerComponent,
    Soteach_bsComponent, SoTeach, SoBet, TennisinnerContent, TennisinnerHeader, VballinnerHeader, VballinnerRight, BsoinnerContent,
    BasketTeach, BasketResult, BasketBet, HorseResult, HorseBet, EspResult, EspBet, StResult, StBet, LotteryResult, LotteryBet,
    LotteryComponent, LotteryHeader, LotteryContent, LotteryRight, Ice_InnerComponent, IceContent, IceHeader, IceRight, BsoRight,
    IceballComponent, IceResult, IceBet, TennisinnerRight, TennisComponent, TennisContent, TennisHeader, TennisRight, FootballComponent,
    TennisResult, TennisBet, SnookerComponent, SnookerHeader, SnookerContent, SnookerRight, SnookerResult, SnookerBet, BsoResult,
    Vball_innerComponent, VballComponent, VballContent, VballHeader, VballRight, VballResult, VballBet, BadmintoninnerHeader,
    BadmintonComponent, BadmintonContent, BadmintonHeader, BadmintonRight, BadmintonResult, BadmintonBet, BsoinnerRight, BsoHeader,
    FootballResult, FootballBet, BsoComponent, TableballComponent, TableballBet, TableballContent, TableballHeader, TableballResult,
    TableballRight
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

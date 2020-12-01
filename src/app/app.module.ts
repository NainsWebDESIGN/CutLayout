import { DataBassService } from './DataBass.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RoutingModule } from './Routes.routing';
import { ErrorComponent } from './Error/Error.component';
import {
  IndexComponent, IndexHeader, IndexLeft, IndexRight, IndexSignin, IndexSeachbox, IndexBallBetting, IndexSignup,
  IndexRightLive, DoubleBet, IndexSideOptions, IndexEnContainer, IndexContent, SkewersPopup, BetsoloPopup
} from './index/index.component';
import { DiscountComponent, DiscountContent, DiscountLeft, DiscountSearch } from './PageHTML/Event/Discount.component';
import {
  MemberComponent, MemberRight, MemberOption, MemberLeft, GetCashPopup, AddCard, ChangePassword
} from './pageHTML/My/Member/Member.component';
import {
  SoccerComponent, SoccerHeader, SoccerContent, SoTeach, SoResult, SoccerTeach_Bs, SoccerTeach, SoccerSenior
} from './pageHTML/Balls/soccer.component/soccer/soccer.component';
import {
  BasballComponent, BasballHeader, BasballContent, BasTeach, BasResult, BasballSenior, BasTeachBs, BasballTeach
} from './PageHTML/Balls/basball.component/basball/basball.component';
import {
  BasketballComponent, BasketballHeader, BasketballContent, BasketTeach, BasketResult, BasketSenior, BasketballTeachbs, BasketballTeach
} from './PageHTML/Balls/basketball.component/basketball/basketball.component';
import { Horse_raceComponent, HorseHeader, HorseContent, HorseResult } from './PageHTML/Balls/horse.component/horse_race/horse_race.component';
import { EspComponent, EspHeader, EspContent, EspResult } from './PageHTML/Balls/esp.component/esp/esp.component';
import { StockComponent, StockHeader, StockContent, StResult } from './PageHTML/Balls/stock.component/stock/stock.component';
import { LottinnerComponent, LottinnerHeader, LottinnerContent } from './PageHTML/Balls/lottery.component/lottery_inner/lottinner.component';
import { Ice_InnerComponent, IceinnerContent, IceinnerHeader } from './pageHTML/Balls/iceball.component/iceball_inner/ice_inner.component';
import { TennisinnerComponent, TennisinnerContent, TennisinnerHeader } from './PageHTML/Balls/tennis.component/tennis_inner/tennisinner.component';
import { SnookerinnerComponent, SnookerinnerContent, SnookerinnerHeader } from './PageHTML/Balls/snooker.component/snooker_inner/snookerinner.component';
import { Vball_innerComponent, VballinnerContent, VballinnerHeader } from './PageHTML/Balls/vball.component/vball_inner/vball_inner.component';
import { MortorComponent, MortorHeader, MortorContent } from './PageHTML/Balls/mortor.component/mortor/mortor.component';
import {
  BadmintoninnerComponent, BadmintoninnerContent, BadmintoninnerHeader
} from './PageHTML/Balls/badminton.component/badminton_inner/badmintoninner.component';
import { FootballinnerComponent, FootballinnerContent, FootballinnerHeader } from './PageHTML/Balls/football.component/football_inner/footballinner.component';
import { BsoinnerComponent, BsoinnerContent, BsoinnerHeader } from './PageHTML/Balls/bso.component/bso_inner/bsoinner.component';
import { Tableball_innerComponent, TableinnerContent, TableinnerHeader } from './PageHTML/Balls/tableball.component/tableball_inner/tableball_inner.component';
import { Soccer_innerComponent, SoinnerHeader, SoinnerContent } from './PageHTML/Balls/soccer.component/soccer_inner/soccer_inner.component';
import { Basketball_innerComponent, BasketHeader, BasketContent } from './PageHTML/Balls/basketball.Component/basketball_inner/basketball_inner.component';
import { HelpComponent, HelpHeader, HelpSave, HelpTrans, HelpCash, HelpBet, HelpRules, HelpSup } from './PageHTML/My/help/help.component';
import {
  Contact_us_sevComponent, ContactHeader, ContactMessage, ContactEvents, ContactAnno, ContactGameAnno
} from './PageHTML/My/Contact_us_sev/Contact_us_sev.component';
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
import { LotteryComponent, LotteryHeader, LotteryContent, LotteryResult, LotterySenior } from './PageHTML/Balls/lottery.component/lottery/lottery.component';
import { IceContent, IceHeader, IceballComponent, IceResult, IceSenior } from './PageHTML/Balls/iceball.component/iceball/iceball.component';
import { TennisComponent, TennisContent, TennisHeader, TennisResult, TennisSenior } from './PageHTML/Balls/tennis.component/tennis/tennis.component';
import { SnookerComponent, SnookerHeader, SnookerContent, SnookerResult, SnookerSenior } from './PageHTML/Balls/snooker.component/snooker/snooker.component';
import { VballComponent, VballContent, VballHeader, VballResult, VballSenior } from './PageHTML/Balls/vball.component/vball/vball.component';
import {
  BadmintonComponent, BadmintonContent, BadmintonHeader, BadmintonResult, BadmintonBet, BadmintonSenior
} from './PageHTML/Balls/badminton.component/badminton/badminton.component';
import {
  FootballComponent, FootballHeader, FootballContent, FootballResult, FootballSenior
} from './PageHTML/Balls/football.component/football/football.component';
import { BsoComponent, BsoContent, BsoHeader, BsoResult, BsoSenior } from './PageHTML/Balls/bso.component/bso/bso.component';
import {
  TableballComponent, TableballContent, TableballHeader, TableballResult, TableballSenior
} from './PageHTML/Balls/tableball.component/tableball/tableball.component';
import { Basball_innerComponent, BasinnerContent, BasinnerHeader } from './PageHTML/Balls/basball.component/basball_inner/basball_inner.component';
import { Esp_innerComponent, EspinnerContent, EspinnerHeader } from './PageHTML/Balls/esp.component/esp_inner/esp_inner.component';
import { Horserace_innerComponent, HorseinnerContent, HorseinnerHeader } from './PageHTML/Balls/horse.component/horserace_inner/horserace_inner.component';
import { Stock_innerComponent, StockinnerContent, StockinnerHeader } from './PageHTML/Balls/stock.component/stock_inner/stock_inner.component';


@NgModule({
  declarations: [
    AppComponent, ErrorComponent, IndexComponent, IndexHeader, IndexLeft, IndexBallBetting, BasketballContent, EspinnerHeader,
    IndexRight, IndexSignin, IndexSeachbox, IndexEnContainer, DiscountComponent, BasketballComponent, BsoinnerHeader, BsoContent,
    IndexRightLive, IndexSideOptions, MemberComponent, SoccerComponent, BasballComponent, LottinnerComponent, HelpBet, LotterySenior,
    Horse_raceComponent, EspComponent, StockComponent, TransFor, IceinnerContent, TennisinnerComponent, SnookerinnerComponent,
    MortorComponent, My_bill_moneybagComponent, VballinnerContent, FootballinnerHeader, FootballContent, Horserace_innerComponent,
    Soccer_innerComponent, Basketball_innerComponent, BasTeach, BasResult, SoResult, FootballHeader, BetsoloPopup, BadmintonResult,
    HelpComponent, Contact_us_sevComponent, Download_appComponent, Bill_recordComponent, BsoinnerComponent, Esp_innerComponent,
    Bill_transComponent, Bill_trans_recordComponent, IndexContent, MemberRight, MemberOption, MemberLeft, SoccerContent, BadmintonContent,
    BillSaveHeader, TransHeader, Bill_getcashComponent, GetCashPopup, GetCashHeader, AddCard, MoneyBagHeader, Tr_RecordBox, IceSenior,
    TakeOut, Bill_nowComponent, NowHeader, BillRecordHeader, HelpHeader, HelpSave, HelpTrans, HelpCash, HelpRules, HelpSup,
    ContactHeader, ContactMessage, ContactEvents, ContactAnno, ContactGameAnno, MessageEvents, MessageAnno, MessageMessage,
    MessageComponent, MessageHeader, MessageGameAnno, SetComponent, SetHeader, AboutComponent, AboutHeader, DownloadHeader,
    AboutAbout, AboutLink, Join_usComponent, JoinHeader, BadmintoninnerComponent, BadmintoninnerContent, TableinnerHeader,
    DownloadContent, BasballHeader, BasballContent, BasketballHeader, FootballinnerComponent, FootballinnerContent, DoubleBet,
    EspHeader, EspContent, HorseHeader, IceinnerHeader, TableinnerContent, BasTeachBs, BasballTeach, BasinnerContent, BasinnerHeader,
    HorseContent, LottinnerHeader, LottinnerContent, MortorHeader, MortorContent, SoccerTeach, BasballSenior, Stock_innerComponent,
    SoccerHeader, My_bill_saveComponent, SoinnerHeader, SoinnerContent, SnookerinnerContent, SnookerinnerHeader, ChangePassword,
    BasketHeader, BasketContent, StockHeader, StockContent, SkewersPopup, Tableball_innerComponent, SoccerSenior, Basball_innerComponent,
    SoccerTeach_Bs, SoTeach, TennisinnerContent, TennisinnerHeader, VballinnerHeader, BsoinnerContent, TableballResult, BadmintonHeader,
    BasketTeach, BasketResult, HorseResult, EspResult, StResult, LotteryResult, HorseinnerContent, HorseinnerHeader, BadmintonBet,
    LotteryComponent, LotteryHeader, LotteryContent, Ice_InnerComponent, IceContent, IceHeader, TableballContent, TableballHeader,
    IceballComponent, IceResult, TennisComponent, TennisContent, TennisHeader, FootballComponent, BsoComponent, TableballComponent,
    TennisResult, SnookerComponent, SnookerHeader, SnookerContent, SnookerResult, BsoResult, FootballResult, BasketSenior, BsoHeader,
    Vball_innerComponent, VballComponent, VballContent, VballHeader, VballResult, BadmintoninnerHeader, BasketballTeachbs, BasketballTeach,
    BadmintonComponent, EspinnerContent, StockinnerContent, StockinnerHeader, TennisSenior, SnookerSenior, VballSenior, BadmintonSenior,
    FootballSenior, BsoSenior, TableballSenior, IndexSignup, DiscountContent, DiscountLeft, DiscountSearch
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [DataBassService],
  bootstrap: [AppComponent]
})
export class AppModule { }

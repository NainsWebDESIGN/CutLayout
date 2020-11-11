import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Error/Error.component';
import { IndexComponent } from './index/index.component';
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
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule {

}

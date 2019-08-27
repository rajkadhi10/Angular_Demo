import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {NumberPipeComponent} from './number-pipe/number-pipe.component';
import { ContactComponent } from './contact/contact.component';
import { MomentComponent } from './moment/moment.component';
import {CurrencyPipeComponent} from './currency-pipe/currency-pipe.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component'
import { CustomerModule } from './customer/customer.module';
import { AuthGuard } from './guards/auth.guard';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [

  { path: '', component: HomeComponent ,canActivate : [AuthGuard]},
  { path: 'contact1', component: ContactComponent ,canActivate : [AuthGuard]},
  { path:'numberpipe',component:NumberPipeComponent ,canActivate : [AuthGuard]},
  { path:'currencypipe',component:CurrencyPipeComponent ,canActivate : [AuthGuard]},
  { path:'moment',component:MomentComponent ,canActivate : [AuthGuard]},
  { path:'about',component:AboutComponent ,canActivate : [AuthGuard]},
  { path:'login',component:LoginComponent},
  { path:'crud',component:CrudComponent,canActivate : [AuthGuard]},
  // { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

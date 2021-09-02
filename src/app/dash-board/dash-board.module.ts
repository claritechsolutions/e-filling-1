import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { PaymentComponent } from './payment/payment.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:"signup",component:SignupComponent},
  {path:"payment",component:PaymentComponent}
]



@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    SignupComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule
  ]
})
export class DashBoardModule { }

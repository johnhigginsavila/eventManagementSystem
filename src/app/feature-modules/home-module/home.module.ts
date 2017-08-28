import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { SignupComponent } from '../../common-component/signup/signup.component';
import { SigninComponent } from '../../common-component/signin/signin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    SignupComponent,
    SigninComponent
  ]
})
export class HomeModule { }

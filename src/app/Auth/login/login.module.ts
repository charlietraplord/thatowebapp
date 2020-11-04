import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { DefaultModule } from 'src/app/layouts/default/default.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    DefaultModule
  ]
})
export class LoginModule { }

import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { ChatsComponent } from "./modules/chats/chats.component";
import { CalendarComponent } from "./modules/calendar/calendar.component";
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';

const routes: Routes = [
   
  {
    path: "",
    component: LoginComponent,
    
  },
  
  {
    path: "Register",
    component: RegisterComponent
    
  },

  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "Dasboard",
        component: DashboardComponent,
      },
      {
        path: "chats",
        component: ChatsComponent,
      },
      {
        path: "calendar",
        component: CalendarComponent,
      },
    ],
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

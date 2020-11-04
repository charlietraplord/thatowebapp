import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { ChatsComponent } from "./modules/chats/chats.component";
import { CalendarComponent } from "./modules/calendar/calendar.component";
import { AuthModule } from './modules/auth/auth.module';
import { SigninComponent } from './modules/auth/signin/signin.component';
import { SignupComponent } from './modules/auth/signup/signup.component';

const routes: Routes = [

  // {
  //   path: "signin",
  //   component: SigninComponent,
  //   children: []
  // },
  // {
  //   path: "signup",
  //   component: SignupComponent,
  //   children: []
  // },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "",
      component: DefaultComponent,
      children: [
        {
          path: "",
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

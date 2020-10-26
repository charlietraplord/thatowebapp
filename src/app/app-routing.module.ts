import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { ChatsComponent } from "./modules/chats/chats.component";
import { CalendarComponent } from "./modules/calendar/calendar.component";

const routes: Routes = [
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

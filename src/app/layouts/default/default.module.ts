import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { ChatsComponent } from "src/app/modules/chats/chats.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CalendarComponent } from "src/app/modules/calendar/calendar.component";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ChatsComponent,
    CalendarComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class DefaultModule {}

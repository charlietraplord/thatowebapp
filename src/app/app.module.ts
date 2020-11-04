import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginModule } from './Auth/login/login.module';
import { DefaultModule } from './layouts/default/default.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,LoginModule,DefaultModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

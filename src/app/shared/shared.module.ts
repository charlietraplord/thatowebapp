import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./componets/header/header.component";
import { SidebarComponent } from "./componets/sidebar/sidebar.component";

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class SharedModule {}

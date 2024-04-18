import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { ControlRoomComponent } from './control-room/control-room.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElementsComponent } from './elements/elements.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RadarChartComponent } from './dashboard/radar-chart/radar-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GraphComponent } from './dashboard/graph/graph.component';
import { ListComponent } from './dashboard/list/list.component';
import { DropdownMenuComponent } from './dashboard/list/dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    ControlRoomComponent,
    DashboardComponent,
    ElementsComponent,
    SettingsComponent,
    NotificationsComponent,
    LogoutComponent,
    NotFoundComponent,
    RadarChartComponent,
    GraphComponent,
    ListComponent,
    DropdownMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    NgApexchartsModule,
    [FontAwesomeModule],
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

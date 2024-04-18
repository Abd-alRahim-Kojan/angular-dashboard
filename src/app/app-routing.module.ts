import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlRoomComponent } from './control-room/control-room.component';
import { ElementsComponent } from './elements/elements.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GraphComponent } from './dashboard/graph/graph.component';
import { ListComponent } from './dashboard/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/graph', pathMatch: 'full' },
  { path: 'control-room', component: ControlRoomComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'graph', pathMatch: 'full' },
      { path: 'graph', component: GraphComponent },
      { path: 'list', component: ListComponent },
    ],
  },
  { path: 'elements', component: ElementsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'notifications', component: NotificationsComponent },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

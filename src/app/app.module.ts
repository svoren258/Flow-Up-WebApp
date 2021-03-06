import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WidgetComponent } from './content/widget/widget.component';
import { WidgetPartComponent } from './content/widget/widget-part/widget-part.component';
import { OptionsComponent } from './menubar/options/options.component';
import { RouterModule, Routes} from '@angular/router';
import { InboxComponent } from './content/inbox/inbox.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { TasksComponent} from './content/tasks/tasks.component';
import { TimesheetComponent } from './content/timesheet/timesheet.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { TeamComponent } from './content/team/team.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard/projects', pathMatch: 'full'},
  { path: 'dashboard/projects', component: DashboardComponent },
  { path: 'dashboard/timesheet', component: TimesheetComponent },
  { path: 'dashboard/team', component: TeamComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'tasks', component: TasksComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ToolbarComponent,
    WidgetComponent,
    WidgetPartComponent,
    OptionsComponent,
    InboxComponent,
    TasksComponent,
    DashboardComponent,
    TimesheetComponent,
    ProjectsComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

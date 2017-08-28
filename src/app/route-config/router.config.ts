import { HomeComponent } from '../feature-modules/home-module/home.component';
import { EventManagementComponent } from '../feature-modules/event-management-module/event-management.component';
import { AdminViewComponent } from '../feature-modules/event-management-module/content/admin-view/admin-view.component';
import { ProgramManagementComponent } from '../feature-modules/event-management-module/content/admin-view/program-management/program-management.component';
import { OrdinaryViewComponent } from '../feature-modules/event-management-module/content/ordinary-view/ordinary-view.component';

import { LoginGuard } from '../guards/login.guard';
export const routerConfig = [
    { path: 'home', component: HomeComponent},
    { path: 'event-management', component: EventManagementComponent, canActivate:[LoginGuard] },
    { path: 'event-management/program-management', component: ProgramManagementComponent, canActivate:[LoginGuard] },
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/home', pathMatch: 'full'}
]
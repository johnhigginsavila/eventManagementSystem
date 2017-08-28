import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbDatepickerModule,
  NgbTimepickerModule, NgbModalModule
} from '@ng-bootstrap/ng-bootstrap';
import { EventManagementComponent } from './event-management.component';
import { CalendarModule } from 'angular-calendar';
import { DateTimePickerModule } from '../../shared/components/date-time-picker.module';
import { ProgramManagementComponent } from './content/admin-view/program-management/program-management.component';
import { AdminViewComponent } from './content/admin-view/admin-view.component';
import { OrdinaryViewComponent } from './content/ordinary-view/ordinary-view.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    DateTimePickerModule
  ],
  declarations: [EventManagementComponent, ProgramManagementComponent, AdminViewComponent, OrdinaryViewComponent]
})
export class EventManagementModule { }
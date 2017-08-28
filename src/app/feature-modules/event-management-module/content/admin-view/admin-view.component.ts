import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, Inject } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { NgModel, FormControl, NgControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { DateTimePickerComponent } from '../../../../shared/components/date-time-picker.component';
import { DatePickerComponent } from '../../../../shared/components/date-picker.component';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-admin-view',
  changeDetection : ChangeDetectionStrategy.OnPush,
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})



export class AdminViewComponent  implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ViewChild('addEventModal') addEventModal: any;
  
  private newEventForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private modal : NgbModal ){
    this.newEventForm = formBuilder.group({
      eventName: new FormControl ('', Validators.required)
    });
  }


  view: string = 'month';

  viewDate: Date = new Date();


  clickedDate: Date;
  
  eventCounter = 0;

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();


  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = false;

  
  //constructor(private modal: NgbModal) {}

/*  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date))|| events.length > 0){
        this.activeDayIsOpen = true;
      } else {
        this.addEventModalToggle();
        this.activeDayIsOpen = false;
      }
      alert(events.length);
    }
  }*/


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {

    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date)) && this.activeDayIsOpen === true) { 
        this.activeDayIsOpen = false;
      }else if(events.length === 0){
        this.addEventModalToggle();
        this.clickedDate = date;
      }else {
        this.clickedDate = date;
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }


  newEvent(): void {

    this.events.push({
      title: this.newEventForm.value.eventName,
      start: this.clickedDate,
      end: this.clickedDate,
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
    console.log(this.newEventForm);
  }


  addEventModalToggle(){
    this.modal.open(this.addEventModal, {size: 'lg'});
  }


  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
      
    });
    this.refresh.next();
  }
  
  ngOnInit(){
    this.newEventForm = this.formBuilder.group({
      eventName: new FormControl ('', Validators.required)
    });
 

  }

}

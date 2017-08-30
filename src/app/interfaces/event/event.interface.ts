import {ISubEvent} from './sub-event.interface';

export interface IEvent {
    id:number;
    eventName:string;
    location:string;
    startDate:Date;
    endDate:Date;
    subEvents: ISubEvent[] // contest or not
}
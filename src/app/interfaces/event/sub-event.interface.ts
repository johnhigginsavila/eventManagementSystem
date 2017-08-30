import { ICriteria } from './criteria.interface';
import { IRepresentative } from './representative.interface';

export interface ISubEvent {
    id: number;
    subEventName: string;
    location: string;
    startDate: Date;
    endDate: Date;
    criteria?: ICriteria[];
    representatives?: IRepresentative[];
}
import { ISubCriteria } from './sub-criteria.interface';
export interface ICriteria {
    id: number;
    criteriaName: string;
    weight: number;
    startDate: Date;
    endDate: Date;
    subCriteria: ISubCriteria[]
}
import { ScoringEnum } from './scoring.enum';
export interface ISubCriteria {
    id: number;
    subCriteriaName: string;
    weight: number;
    type: ScoringEnum;
}
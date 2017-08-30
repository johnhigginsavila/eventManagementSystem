import { IUserData } from '../user/user-data.interface';
import { IScore } from './score.interface';
import { IVote } from './vote.interface';

export interface IRepresentative {
    id: number;
    representativeName: string;
    members: IUserData[];
    scores: IScore[];
    votes: IVote[];
}
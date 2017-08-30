import { IUserData } from '../user/user-data.interface';

export interface IVote {
    id: number;
    voter: IUserData;
}
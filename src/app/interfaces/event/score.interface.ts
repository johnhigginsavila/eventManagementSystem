import { IUserData } from '../user/user-data.interface';

export interface IScore {
    id: number;
    rating: number;
    judge: IUserData;
}
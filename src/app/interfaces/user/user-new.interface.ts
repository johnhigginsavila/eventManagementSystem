import { IUser } from './user.interface';

export interface IUserNew extends IUser {
    idNumber: string;
    firstname: string;
    lastname: string;
    password: string;
    confirmation: string;
}
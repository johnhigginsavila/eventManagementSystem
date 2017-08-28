import { IUserLogin } from './user-login.interface';

export interface IUserData extends IUserLogin {
    id: number;
    idNumber: string;
    firstname: string;
    lastname: string;
}
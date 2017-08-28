import { Injectable } from '@angular/core';
import { Http, Response, Request, Jsonp, URLSearchParams, RequestOptions, RequestOptionsArgs,  Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IUserNew } from '../interfaces/user/user-new.interface';
import { IUserData } from '../interfaces/user/user-data.interface';
import { IUserLogin } from '../interfaces/user/user-login.interface';


@Injectable()
export class SessionService {


  private loginUserUrl: string = 'session/create';

  constructor(private http: Http, private router: Router) { }

  CheckUserSession(): IUserData {
    const userSession: IUserData = JSON.parse(sessionStorage.getItem('user'));
    return userSession; 
  }
  
  SaveUserSession(user:IUserData): void {
    sessionStorage.setItem('user',JSON.stringify(user));
  }

  SessionDestroy(): void {
    sessionStorage.clear();
    this.router.navigate(['home']);
  }

  CreateUserSession(userCredentials: IUserLogin): Observable<IUserData>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers});
    return this.http.post(this.loginUserUrl, userCredentials, options)
      .map(response => response.json())
  }

}

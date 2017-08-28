import { Injectable } from '@angular/core';
import { Http, Response, Request, Jsonp, URLSearchParams, RequestOptions, RequestOptionsArgs,  Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IUserNew } from '../interfaces/user/user-new.interface';
import { IUserData } from '../interfaces/user/user-data.interface';
import { IUserLogin } from '../interfaces/user/user-login.interface';

@Injectable()
export class UserService {


  private newUserUrl: string = 'user/create';
  private allUserUrl: string = 'user';

  constructor(private http: Http) {}

  
  GetAllUser(): Observable<IUserData[]> {
    const headers = new Headers();
    headers.append('ContentType', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.allUserUrl, options)
      .map(response => response.json())
  }
    
  CreateUser(newUser: IUserNew): Observable<IUserData> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers});
    return this.http.post(this.newUserUrl, newUser, options)
      .map(response => response.json())   
  }

  

}

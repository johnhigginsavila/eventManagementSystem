import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NgRedux, select} from 'ng2-redux';
import { CHECK_USER_SESSION } from '../actions';
import { rootReducer, IAppState} from '../store';

@Injectable()
export class LoginGuard implements CanActivate {
  @select() userSession;
  //constructor(private ngRedux: NgRedux<IAppState>, private router: Router){}
  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  } */

  canActivate(){
    return this.isLogin();
  }

  private isLogin(): boolean {
    let admin:boolean;
    this.userSession.subscribe(
      userSession => {
        if(!userSession){
          admin = false;
        }else{
          admin = true;
        }
      }
    );
    
    if(!admin){
      console.log("LogInGuard: Please Login to continue");
    }else{
      return admin;
    }
  }
}

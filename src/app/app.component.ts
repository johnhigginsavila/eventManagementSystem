import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NgRedux, select } from 'ng2-redux';
import { SessionService } from './services/session.service';
import { UserService } from './services/user.service';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { CHECK_USER_SESSION, FETCH_USER_LIST } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private logedIn: boolean = false;
  title = 'Informatics Event Management System';

  @select() usersList;
  @select() userSession;

  constructor(private ngRedux: NgRedux<IAppState>, private sessionService: SessionService, private userService: UserService){}
  
  ngOnInit(){
    this.ngRedux.dispatch({type: CHECK_USER_SESSION});
    this.userService.GetAllUser()
      .subscribe(
        users => {
          const userSession = this.sessionService.CheckUserSession();
          this.ngRedux.dispatch({type: FETCH_USER_LIST, usersList:users, userSession:userSession });
        },
        error => console.log(error)
      )
    
    
  }
}

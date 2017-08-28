import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { NgIf, NgFor } from '@angular/common';

import { UserService } from '../../services/user.service';
import { IUserData } from '../../interfaces/user/user-data.interface';

import { IAppState, rootReducer} from '../../store';
import { CHECK_USER_SESSION, SIGN_UP_ATTEMPT, CHANGED_PAGE } from '../../actions';

@Component({
  /*selector: 'app-home',*/
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @select() userSession;
  @select() signUpAttempt;

  private isLoging: boolean = false;
  private isRegistering: boolean = false;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.dispatch({type: CHECK_USER_SESSION});
    
  }

  ngOnInit() {
    this.ngRedux.dispatch({type: CHANGED_PAGE, page:'home'});
  }

  onSignUp() {
    this.ngRedux.dispatch({type: SIGN_UP_ATTEMPT, signUpAttempt:true});
  }
}

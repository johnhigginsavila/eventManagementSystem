import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';

import { NgRedux, select } from 'ng2-redux';

import { rootReducer, IAppState } from '../../store';
import { CHECK_USER_SESSION,CHANGED_PAGE } from '../../actions';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {

  @select() userSession;
  



  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.dispatch({type: CHECK_USER_SESSION});
    
  }

  ngOnInit() {
    this.ngRedux.dispatch({type: CHANGED_PAGE, page:'event-management'});
  }




}

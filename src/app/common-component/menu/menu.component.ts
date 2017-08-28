import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { NgRedux, select} from 'ng2-redux';

import { SessionService } from '../../services/session.service';

import { CHECK_USER_SESSION, SIGNED_OUT } from '../../actions';
import {rootReducer, IAppState } from '../../store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  @select() userSession;
  @select() page;

  private currentRoute: string;

  constructor(private ngRedux: NgRedux<IAppState>, private sessionService: SessionService, router: Router) {

  }

  ngOnInit() {
    this.ngRedux.dispatch({type: CHECK_USER_SESSION});
  }

  onSignOut(): void {
    this.sessionService.SessionDestroy();
    this.ngRedux.dispatch({type:SIGNED_OUT});
  }

}

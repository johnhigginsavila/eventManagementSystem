import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { NgIf, NgFor } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators, NgModel } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { IUserLogin } from '../../interfaces/user/user-login.interface';
import { SessionService} from '../../services/session.service';
import { IUserNew } from '../../interfaces/user/user-new.interface';

import { NgRedux, select } from 'ng2-redux';
import { SIGNED_IN } from '../../actions';
import { IAppState, rootReducer } from '../../store';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {
  
  private sessionNewForm: FormGroup;


  constructor(private userService: UserService, private formBuilder: FormBuilder, private ngRedux: NgRedux<IAppState>, private sessionService: SessionService) { 
    this.sessionNewForm = formBuilder.group({
      loginName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
    this.sessionNewForm = this.formBuilder.group({
      loginName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  onSubmit(): void{
    this.sessionService.CreateUserSession(this.sessionNewForm.value)
      .subscribe(
        userData => {
          this.sessionService.SaveUserSession(userData);
          this.ngRedux.dispatch({type: SIGNED_IN, user:userData, signedIn:{success:'Sign in success!', error:null}});
        },
        error => {
          this.ngRedux.dispatch({type: SIGNED_IN, user:null, signedIn:{success:null, error:JSON.stringify(error._body)}});
        }
      )
  }

  onCancel(): void{
    this.sessionNewForm = this.formBuilder.group({
      loginName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  } 

}

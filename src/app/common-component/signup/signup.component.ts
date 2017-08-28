import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { NgIf, NgFor } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators, NgModel } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { SessionService} from '../../services/session.service';
import { IUserNew } from '../../interfaces/user/user-new.interface';

import { NgRedux, select } from 'ng2-redux';
import { SIGN_UP_ATTEMPT, SIGNED_UP, SIGNED_IN } from '../../actions';
import { IAppState, rootReducer } from '../../store';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private userNewForm: FormGroup;

  constructor(private sessionService:SessionService, private formBuilder: FormBuilder, private userService: UserService, private ngRedux: NgRedux<IAppState>) { 
    this.userNewForm = formBuilder.group({
      email: new FormControl('',Validators.email),
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      idNumber: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmation: new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
    this.userNewForm = this.formBuilder.group({
      email: new FormControl('',Validators.email),
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      idNumber: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmation: new FormControl('',Validators.required)
    });
  }

  onSubmit(): void{
    this.userService.CreateUser(this.userNewForm.value)
      .subscribe(
        newUser => {
          this.ngRedux.dispatch({type:SIGNED_UP, signUpAttempt:false, user:newUser, signedUp:{success:'Sign Up Success!', error:undefined}});
          this.sessionService.SaveUserSession(newUser);
        },
        error => {
          this.ngRedux.dispatch({type:SIGN_UP_ATTEMPT, signedUp:{success:undefined, error:JSON.stringify(error._body)}});
        }
      )
  }

  onCancel(): void{
    this.ngRedux.dispatch({type: SIGN_UP_ATTEMPT, signUpAttempt:false});
  }

  ngOnDestroy(){
    //this.ngRedux.dispatch({type: SIGN_UP_ATTEMPT, signUpAttempt:false});
  }

}

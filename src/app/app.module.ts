import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';

/* Router Configurations */
import { routerConfig } from './route-config/router.config';

/* Custom Material */
//import { MaterialModule } from './material/material.module';

/* Service Module */
import { ServiceModule } from './services/service.module';

/* Guards */
import { LoginGuard } from './guards/login.guard';

/* Feature modules */
import { EventManagementModule } from './feature-modules/event-management-module/event-management.module';
import { HomeModule } from './feature-modules/home-module/home.module';
import { LoginModule } from './feature-modules/login-module/login.module';

/* Main Component */
import { AppComponent } from './app.component';

/* Common Components */
import { MenuComponent } from './common-component/menu/menu.component';
import { SignupComponent } from './common-component/signup/signup.component';
import { SigninComponent } from './common-component/signin/signin.component';


/* Redux */
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceModule.forRoot(),
    NgReduxModule,
    RouterModule.forRoot(routerConfig, {useHash: true}),
    NgbModule.forRoot(),
    CalendarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HomeModule,
    LoginModule,
    EventManagementModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>, devTools:DevToolsExtension){
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore( rootReducer, INITIAL_STATE, [], enhancers );
  }
}

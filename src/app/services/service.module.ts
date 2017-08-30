import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { SessionService } from './session.service';
import { EventService } from './event.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ServiceModule {

    static forRoot() : ModuleWithProviders {
        return{
            ngModule : ServiceModule,
            providers: [
              UserService,
              SessionService,
              EventService
            ]
        }
    }
 }

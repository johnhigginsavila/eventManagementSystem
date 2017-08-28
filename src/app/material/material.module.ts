import { NgModule } from '@angular/core';
import { MdMenuModule, MdToolbarModule } from '@angular/material';
import { MdButtonModule, MdCheckboxModule, MdSidenavModule } from '@angular/material';
@NgModule({
  imports: [
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule
  ],
  exports: [
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule
  ]
})
export class MaterialModule { }

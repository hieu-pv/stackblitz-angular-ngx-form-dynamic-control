import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxFormModule } from '@ngxform/platform';
import { NgxFormCommonModule } from '@ngxform/common';
import { NgxFormUiModule } from '@ngxform/ui';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,NgxFormModule,NgxFormCommonModule,NgxFormUiModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

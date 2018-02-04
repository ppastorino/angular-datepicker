import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DatePickerPopupComponent } from './datepicker-popup.component';

@NgModule({
  declarations: [
    AppComponent, 
    DatePickerPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [
    FormsModule,
    CommonModule,
    NgbModule,
    
    DatePickerPopupComponent
  ]
})
export class AppModule { }

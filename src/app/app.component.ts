import { Component } from '@angular/core';
import {DatePickerPopupComponent} from './datepicker-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dateValue: string;
}

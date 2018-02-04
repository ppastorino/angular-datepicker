import {Component, Input, forwardRef , ViewChild, ContentChild, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import {ControlValueAccessor , NG_VALUE_ACCESSOR } from '@angular/forms';
import {FormControlName} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {NgbDateParserFormatter, NgbDateStruct, NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'datepicker-popup',
    templateUrl: './datepicker-popup.component.html',
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => DatePickerPopupComponent),
          multi: true,
        }
    ]
})
export class DatePickerPopupComponent implements ControlValueAccessor, AfterViewInit {

    @ViewChild('datepicker') datepicker: NgbInputDatepicker;
    @ViewChild(FormControlName) formControlName: FormControlName;

    constructor(private elm: ElementRef, public parserFormatter: NgbDateParserFormatter) {
    }

    ngAfterViewInit() {
    }

    writeValue(value: any) {
        this.datepicker.writeValue(this.stringToNgbDateStruct(value));
    }

    registerOnChange(fn) {
        this.datepicker.registerOnChange((value) => {fn(this.ngbDateStructToString(value))});
    }

    registerOnTouched(fn) {
        this.datepicker.registerOnTouched(fn);
    }

    stringToNgbDateStruct(value : any) : NgbDateStruct{
        return this.parserFormatter.parse(value);
    }

    ngbDateStructToString(value : any) : String {
        return this.parserFormatter.format(value);
    }

 }

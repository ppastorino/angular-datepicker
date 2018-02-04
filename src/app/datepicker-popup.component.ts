import {Component, Input, forwardRef , ViewChild, ContentChild, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import {ControlValueAccessor , NG_VALUE_ACCESSOR } from '@angular/forms';
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

    constructor(public parserFormatter: NgbDateParserFormatter) {
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

    /**
     * Converts from string to NgbDateStruct<br>
     * You can inject another parserFormatter to change the date format.
     * 
     * @param value String value form component
     */
    stringToNgbDateStruct(value : any) : NgbDateStruct{
        return this.parserFormatter.parse(value);
    }

    /**
     * Converts from NgbDateStruct to a String
     * @param value NgbDateStruct from NgbInputDatepicker
     */
    ngbDateStructToString(value : any) : String {
        return this.parserFormatter.format(value);
    }

 }

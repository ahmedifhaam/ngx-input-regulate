import { Attribute, Directive, ElementRef, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
    selector: '[ngxInputRegulateTemplate]'
})
export class ngxInputRegulateCommon{
    regExpattern: RegExp;
    previousValue: any;

    constructor(@Attribute('ngxir-pattern')pattern: string, private control: ElementRef){
        this.regExpattern = new RegExp(pattern);
        this.previousValue = this.control.nativeElement.value;
    }

    @HostListener('input', ['$event'])
    onInputChange(event: any){
        event.preventDefault();
        var test = this.regExpattern.test(this.control.nativeElement.value);
        if (test) {
            this.previousValue = this.control.nativeElement.value;
        }
        this.control.nativeElement.value = this.previousValue;
        // = this.previousValue; 
    }
}
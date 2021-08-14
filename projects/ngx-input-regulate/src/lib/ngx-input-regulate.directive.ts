import { Attribute, Directive, ElementRef, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
    selector: '[ngxInputRegulate]'
})
export class ngxInputRegulateReactive{
    regExpattern: RegExp;

    constructor(@Attribute('ngxir-pattern')pattern: string, private control: NgControl){
        this.regExpattern = new RegExp(pattern);
    }

    @HostListener('input', ['$event'])
    onInputChange(event: any) {
        var test = this.regExpattern.test(event.target.value);
        if (test) {
            event.target.defaultValue = event.target.value;
        } else {
            this.control.control?.setValue(event.target.defaultValue);
        }
    }
}
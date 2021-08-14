import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-reactive-form-sample',
    templateUrl: './reactive-forms.component.html',

})
export class ReactiveFormsSampleComponent implements OnInit, OnDestroy{
    

    private subs = new Subscription();

    
    valueProp: string = ""

    formGroup = new FormGroup({
        exampleControl: new FormControl('')
    })

    ngOnInit(): void {
        this.subs.add(
            this.formGroup.controls.exampleControl.valueChanges.subscribe(v => this.valueProp = v)
        )
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
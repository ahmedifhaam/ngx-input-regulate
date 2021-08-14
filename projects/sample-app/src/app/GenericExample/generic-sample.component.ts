import { Component } from "@angular/core";

@Component({
    selector: 'app-generic-sample',
    templateUrl: './generic-sample.component.html'
})
export class GenericSampleComponent{
    value: string = 'initial Value';

    onChange(event: any){
        this.value = event;
    }
}
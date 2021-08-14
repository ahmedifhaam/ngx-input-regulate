import { NgModule } from "@angular/core";
import { ngxInputRegulateModule } from "projects/ngx-input-regulate/src/public-api";
import { GenericSampleComponent } from "./generic-sample.component";

@NgModule({
    declarations: [
        GenericSampleComponent
    ],
    imports: [
        ngxInputRegulateModule
    ],
    exports: [
        GenericSampleComponent
    ]
})
export class GenericSampleModule{}
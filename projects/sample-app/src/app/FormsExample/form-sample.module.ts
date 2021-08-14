import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ngxInputRegulateModule } from "projects/ngx-input-regulate/src/public-api";
import { FormSampleComponent } from "./form-sample.component";

@NgModule({
    declarations: [
        FormSampleComponent
    ],
    imports: [
        FormsModule,
        ngxInputRegulateModule
    ],
    exports: [
        FormSampleComponent
    ]
})
export class FormSampleModule {

}
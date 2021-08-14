import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ngxInputRegulateModule } from "projects/ngx-input-regulate/src/public-api";
import { ReactiveFormsSampleComponent } from "./reactive-forms.component";

@NgModule({
    declarations: [
        ReactiveFormsSampleComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        ngxInputRegulateModule
    ],
    exports: [
        ReactiveFormsSampleComponent
    ]

})
export class ReactiveFormsSampleModule{}
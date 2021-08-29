import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ngxInputRegulateReactive } from "./ngx-input-regulate.directive";

@NgModule({
    declarations: [
        ngxInputRegulateReactive,
    ],
    imports: [
        
    ],
    exports: [ngxInputRegulateReactive],
    providers: [],
    bootstrap: []
  })
  export class ngxInputRegulateModule { }
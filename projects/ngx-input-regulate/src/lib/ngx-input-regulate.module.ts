import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ngxInputRegulateCommon } from "./ngx-input-regulate-common.directive";
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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormSampleModule } from './FormsExample/form-sample.module';
import { GenericSampleModule } from './GenericExample/generic-sample.module';
import { ReactiveFormsSampleModule } from './ReactiveFromsExample/reactive-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GenericSampleModule,
    FormSampleModule,
    ReactiveFormsSampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

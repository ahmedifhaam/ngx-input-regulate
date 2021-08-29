

# NgxInputRegulate
This package is designed to restrict inputs in Angular **Reactive form** input controls. Based on a **regex** pattern users can restrict the inputs. **This will work for copy pasting as well.**

# RegEx for common scenarios
```
1. Integer: ^[0-9 ]*$
2. float: ^[+-]?([0-9]*[.])?[0-9]+$
3. words: ([A-z]*\\s)*$

Any custom regex you might make will be also compatible. 
```
# How to Install 
  Enter the following command in your project root folder (as usual)
  `npm i ngx-input-regulate`

# Steps to use
1. Install the package as show in the above section
2. Import the module 
		**AppModule.ts**
	```typescript
	 import { NgModule } from  '@angular/core';
	 import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
	 import { BrowserModule } from  '@angular/platform-browser';
	 
	 import { ngxInputRegulateModule } from  'ngx-input-regulate';
	 
	 import { AppComponent } from  './app.component';
	 
	 @NgModule({
			 declarations: [AppComponent],
			 imports: [
				 BrowserModule,
				 FormsModule,
				 ReactiveFormsModule,
				 ngxInputRegulateModule
				 ],
			  providers: [],
			  bootstrap: [AppComponent]
			  })
	export  class  AppModule { } 
	```
3. Define the regex in **ngxir-pattern** attribute
4. Add the **ngxInputRegulate** Directive
	**AppComponent.html**
	```html
	<form  [formGroup]="formGroup">
		<input  ngxInputRegulate  ngxir-pattern="^[1-3]*$"  formControlName="namecontrol">
		This is the value of name : {{name}}
	</form>
	```
Here the input is regulated to have only integer values from 1 or 2 or 3 any other inputs will be restricted 

Adding the ts file for reference 

**AppComponent.ts**
```ts
import { Component, OnInit } from  '@angular/core';
import { FormControl, FormGroup } from  '@angular/forms';

@Component({
	selector:  'app-root',
	templateUrl:  './app.component.html',
	styleUrls: ['./app.component.css']
	})

export  class  AppComponent  implements  OnInit{
	name = ''
	formGroup: FormGroup = new  FormGroup({
		namecontrol:  new  FormControl('')
	});
	ngOnInit(): void {
		this.formGroup.controls.namecontrol.valueChanges.subscribe(v  =>  this.name = v);
	}
}
```
# Example 
Please find the complete example at stackblits
	https://angular-ivy-zmqusk.stackblitz.io

# Github-Link
Feel free to create issues at : https://github.com/ahmedifhaam/ngx-input-regulate/issues

# License 
GPL-V3 - https://www.gnu.org/licenses/gpl-3.0.txt

Developer : Ahmed Ifhaam
ahmedifhaam1@gmail.com
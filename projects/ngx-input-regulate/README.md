# NgxInputRegulate

This package is to restrict inputs for reactive form input controls.

# Example Use case 
HTML template
`<form [formGroup]="formGroup">
    <input formControlName="exampleControl" ngxInputRegulate ngxir-pattern="^[1-3]*$">
    Value is : {{valueProp}}
</form>`

``
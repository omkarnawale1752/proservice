import {FormBuilder, FormGroup,Validators } from "@angular/forms";


export class LogiPageForm{
    private formBuilder:FormBuilder;
    constructor( formBuilder:FormBuilder){
        this.formBuilder=formBuilder
    }
   createForm():FormGroup {
    return this.formBuilder.group({
        email:['',[Validators.required]],
        password:['',[Validators.required]]

    })
   }
   
}
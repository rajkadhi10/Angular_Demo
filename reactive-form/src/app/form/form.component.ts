import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { log } from 'util';

 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userForm: any;
  afterSubmit:boolean=false;
  nameValue:String;
  emailValue:String;
  mobileValue:String;
  // passwordValue:;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,30}')]],
     
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern(/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/)]],
      mob:['',[Validators.required, Validators.pattern(/(^\d{10}$)/)]],

    });
  }
  get name():FormBuilder{
    console.log(this.userForm.controls.name);
    return <FormBuilder>this.userForm.controls.name;
  }
  get email():FormBuilder{
    console.log(this.userForm.controls.email);
    return <FormBuilder>this.userForm.controls.email  ;
  }
  get password():FormBuilder{
    console.log(this.userForm.controls.password);
    return <FormBuilder>this.userForm.controls.password  ;
  }
  get mob():FormBuilder{
    console.log(this.userForm.controls.mob);
    return <FormBuilder>this.userForm.controls.mob  ;
  }
  onSubmit(){
    console.log(this.userForm.value);
    this.afterSubmit=true;
    this.nameValue=this.userForm.value.name;
    this.emailValue=this.userForm.value.email;
    this.mobileValue=this.userForm.value.mob;
    // this.passwordValue=this.userForm.value.password;
  }

}

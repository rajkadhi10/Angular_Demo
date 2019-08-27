import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';  
// import { ILogin } from 'src/app/interfaces/login';  
import { AuthService } from '../services/auth.service'  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: any;
  afterSubmit:boolean=false;
  nameValue:String;
  emailValue:String;
  mobileValue:String;
  returnUrl : String; 
  // passwordValue:;
  constructor(private formBuilder: FormBuilder, private userService:UserService,  private router : Router,  
    private authService : AuthService  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: [''],});
      this.returnUrl = '/',
      this.authService.logout();
  
  }
  get name():FormBuilder{
    console.log(this.userForm.controls.name);
    return <FormBuilder>this.userForm.controls.name;
  }
  get password():FormBuilder{
    console.log(this.userForm.controls.password);
    return <FormBuilder>this.userForm.controls.password  ;
  }
  onSubmit(){
    // console.log(this.userForm.value);
    
      
       this.userService.login(this.userForm.value.name,this.userForm.value.password).subscribe((data)=>{
        localStorage.setItem('isLoggedIn', "true");  
        localStorage.setItem('token', this.userForm.value.name);
        this.router.navigate([this.returnUrl]);
         
       });
       

    
    // this.afterSubmit=true;
    // this.passwordValue=this.userForm.value.password;
  }

}



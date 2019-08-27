import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  userForm: any;
  data:any;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private authService: AuthService) { }
  getuser:boolean;
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: [''],

    });
    this.getuser=false;

    

  }
  get name(): FormBuilder {
    console.log(this.userForm.controls.name);
    return <FormBuilder>this.userForm.controls.name;
  }
  get password(): FormBuilder {
    console.log(this.userForm.controls.password);
    return <FormBuilder>this.userForm.controls.password;
  }
  onSubmit() {
    // console.log(this.userForm.value);
    this.userService.putdata(this.userForm.value.name, this.userForm.value.password).subscribe((data) => {
      console.log(data);
      alert("Data Added");
    }, (error) => {
      console.log(error);

    });

  }
  display() {
    this.userService.getdata(this.userForm.value.name, this.userForm.value.password).subscribe((data) => {
      console.log(data);
      this.data=data;
      this.getuser=true;
      // alert("Data Added");
    }, (error) => {
      console.log(error);

    });
  }
}

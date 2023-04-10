import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formractive',
  templateUrl: './formractive.component.html',
  styleUrls: ['./formractive.component.css']
})
export class FormractiveComponent implements OnInit{
  genders=['male','female'];
  public myForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
   ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

   get f():any { return this.myForm?.controls; }

  onSubmit(f: any) {
    this.submitted = true;
    if (this.myForm?.invalid) {
      return;
    }

    let postVars = {
      firstName: f.value.firstName,
      lastName:f.value.lastName,
      email: f.value.email,
      company: f.value.company,
      phone: f.value.phone,
      gender: f.value.gender,
      password: f.value.password,
      confirmpassword:f.value.confirmpassword
    };
  }

  onCancel(){
    this.myForm.reset;
  }
}

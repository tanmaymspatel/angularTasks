import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userForm = {} as FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.buildUserForm();
  }
  buildUserForm() : FormGroup{
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      lastName: ['', Validators.required],
      email: [null, [Validators.minLength(7), Validators.maxLength(12), Validators.email]],
      phoneNumber: [null, Validators.required],
      gender: [],
      department: [],
      dateOfEmployement: []
    })
  }
  resetForm(){
    this.userForm.reset();
  }
 saveData(){
  console.log(this.userForm)
}
 
}


// saveUserData(){
//   console.log(this.userForm);
// }


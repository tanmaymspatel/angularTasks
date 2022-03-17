import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectData } from '../model/subject.model';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  userForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      primaryContactNumber: new FormControl('', Validators.required),
      clientName: new FormControl('', Validators.required),
      office: new FormControl('', Validators.required),
    });
  }

  saveData(){
    console.log(this.userForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../services/subject.service';


@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder, private _subjectService : SubjectService) { }

  ngOnInit(): void {
    this.userForm = this.CreatForm();
    this._subjectService.editData.subscribe(res => {
      this.userForm.patchValue(res);
    })
  }

  public CreatForm() : FormGroup{
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      primaryContactNumber: ['', Validators.required],
      clientName: ['', Validators.required],
      office: ['', Validators.required]
    })
  }

  saveData(){
    console.log(this.userForm.value);
    this._subjectService.userData.next(this.userForm.value);
    this.userForm.reset();
  }
  onCancel(){
    this.userForm.reset();
  }
}

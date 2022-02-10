import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  resumeForm : FormGroup;
  // skills: FormArray;
  technicalSkills: FormArray;
  experience: FormArray;
  education: FormArray;

  constructor(private fb:FormBuilder, private router:Router, private resumeServices : ResumeService ) { }

  ngOnInit(): void {
    this.buildResumeForm(); 
  }

  buildResumeForm(){
    this.resumeForm = this.fb.group(
    {
      fullName : ['', Validators.required],
      designation : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      profile:['', Validators.required],
      // skills: this.fb.array([
      //   this.getNewSkillsRow()
      // ]),
      technicalSkills: this.fb.array([this.getNewTechSkillsRow()]),
      experience: this.fb.array([this.getExperienceRow()]),
      education: this.fb.array([this.getEducationRow()]),
    }
    )
  }

  showResumeData(){
    this.resumeServices.saveData(this.resumeForm.value).subscribe(res=>{
      alert("data submitted!")
    }, (error) => {
      alert('data not submitted' + error)
    });
    this.router.navigate(['/resume-form/resume-view']);
    console.log(this.resumeForm)
  }
// Skills
  // getNewSkillsRow(): FormGroup {
  //   return this.fb.group({
  //     skillName: [""],
  //     skillDescription: [""]
  //   });
  // }
  // getSkillsArray() : FormArray{
  //   return this.resumeForm.controls['skills'] as FormArray
  // }

  // addSkills() {
  //   this.skills = this.resumeForm.get('skills') as FormArray;
  //   this.skills.push(this.getNewSkillsRow())
  // }

  // deleteSkills(index:number){
  //   if(this.skills.length !=1){
  //     this.skills = this.resumeForm.get('skills') as FormArray;
  //     this.skills.removeAt(index)
  //   }
  //   console.log(this.skills.length)
  // }


  //technical skills
  getNewTechSkillsRow(): FormGroup {
    return this.fb.group({
      techSkillName: [""]
    });
  }
  getTechSkillsArray() : FormArray{
    return this.resumeForm.controls['technicalSkills'] as FormArray;
  }

  addTechSkills() {
    this.technicalSkills = this.resumeForm.get('technicalSkills') as FormArray;
    this.technicalSkills.push(this.getNewTechSkillsRow())
  }

  deleteTechSkills(index:number){
    if(this.technicalSkills.length !=1){
      this.technicalSkills = this.resumeForm.get('technicalSkills') as FormArray;
      this.technicalSkills.removeAt(index)
    }
    console.log(this.technicalSkills.length)
  }



  //Experience
  getExperienceRow(): FormGroup {
    return this.fb.group({
      CompanyName: [""],
      jobPosition: [""],
      jobDescription: [""],
      jobDurationStart: [null],
      jobDurationEnd: [null],
    });
  }
  getExperienceArray() : FormArray{
    return this.resumeForm.controls['experience'] as FormArray;
  }

  addExperience() {
    this.experience = this.resumeForm.get('experience') as FormArray;
    this.experience.push(this.getExperienceRow())
  }

  deleteExperience(index:number){
    if(this.experience.length !=1){
      this.experience = this.resumeForm.get('experience') as FormArray;
      this.experience.removeAt(index)
    }
    console.log(this.experience.length)
  }


  //Education
  getEducationRow(): FormGroup {
    return this.fb.group({
      instituteName: [""],
      degreeName: [""],
      cgpa: [null],
    });
  }
  getEducationArray() : FormArray{
    return this.resumeForm.controls['education'] as FormArray;
  }

  addEducation() {
    this.education= this.resumeForm.get('education') as FormArray;
    this.education.push(this.getEducationRow())
  }

  deleteEducation(index:number){
    if(this.education.length !=1){
      this.education = this.resumeForm.get('education') as FormArray;
      this.education.removeAt(index)
    }
    console.log(this.experience.length)
  }


  // on submit data to db


}

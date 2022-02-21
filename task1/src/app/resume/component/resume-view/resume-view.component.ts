import { Component, OnInit } from '@angular/core';
import { Resume } from '../../resume';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

  resumeData : Resume;
   
  constructor(private resumeService : ResumeService) { }

  ngOnInit(): void {
    this.getResumeData();
  }

  getResumeData(){
    this.resumeService.getResumeData().subscribe((data)=>{
      this.resumeData = data;
    }, (error)=>{
      alert("something went wrong");
    });
  }


}

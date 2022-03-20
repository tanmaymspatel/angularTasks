import { Component, OnInit } from '@angular/core';
import { SubjectData } from '../model/subject.model';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  public listData: SubjectData[] = [];

  constructor(private _subjectService: SubjectService) { }

  ngOnInit(): void {
    this._subjectService.userData.subscribe((res) => { this.listData.push(res) });
  }

  deleteData(indexData: number) {

    this.listData = this.listData.filter((val, index) =>  index != indexData);
}

editData(i : number){
  console.log(`hello ${i}`);
  }
}

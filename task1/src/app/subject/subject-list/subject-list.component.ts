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
  public filterData: SubjectData;
  public activeId: number;
  public isEditMode: boolean = false;

  constructor(private _subjectService: SubjectService) { }

  ngOnInit(): void {
    this._subjectService.userData.subscribe((res) => {
      if (this, this.isEditMode) {
        this.listData[this.activeId] = res;
        this.isEditMode = false;
      } else {
        this.listData.push(res);
      }
    });
  }

  deleteData(indexData: number) {
    this.listData = this.listData.filter((val, index) => index != indexData);
    // this.listData.splice(i,1);
  }

  editData(index: number) {
    console.log(`hello ${index}`);
    this.filterData = this.listData[index];
    this._subjectService.editData.next(this.filterData);
    this.activeId = index;
    this.isEditMode = true;
  }
}

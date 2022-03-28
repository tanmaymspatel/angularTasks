import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Mentors } from '../../model/mentors.model';
import { MentorsListPresenterService } from '../mentors-list-presenter/mentors-list-presenter.service';

@Component({
  selector: 'app-mentors-list-presentation',
  templateUrl: './mentors-list-presentation.component.html',
  styleUrls: ['./mentors-list-presentation.component.scss'],
  viewProviders:[MentorsListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class MentorsListPresentationComponent implements OnInit {

  @Input() public set mentorList(value : Mentors[] | null){
    if (value){
      if(!this._originalMentorsList){
        this._originalMentorsList = value;
      }
      this._mentorslist = value;
    }
  }

  public get mentorList() : Mentors[] | null{
    return this._mentorslist;
  }
  public isFilterMode:boolean = false;

  @Output() deleteMentor : EventEmitter<number>;
  // @Output() closeOverlay : EventEmitter<any>;

  private _mentorslist : Mentors[];
  private _originalMentorsList : Mentors[];

  constructor(private _mentorListPresenterService:MentorsListPresenterService, private _cdr : ChangeDetectorRef) {

    this.deleteMentor = new EventEmitter<number>();
    // this.closeOverlay = new EventEmitter<any>();
   }

  ngOnInit(): void {

    this._mentorListPresenterService.delete$.subscribe(res=>{
      // console.log(res);
      this.deleteMentor.emit(res);
    })

      this._mentorListPresenterService.filterData$.subscribe(res=>{  
        this._mentorslist = res;
        this.isFilterMode = true;
        this._cdr.detectChanges();
        
      });
      
      
  }

  onDelete(id:number){
    // console.log(id);
    this._mentorListPresenterService.onDelete(id);
  }

  filterOverlay(){
    this._mentorListPresenterService.openFilter(this._originalMentorsList);
  }

  

}

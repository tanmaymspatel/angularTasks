import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
      // console.log(value)
      this._mentorslist = value;
    }
  }

  public get mentorList() : Mentors[] | null{
    return this._mentorslist;
  }

  @Output() deleteMentor : EventEmitter<number>;
  @Output() closeOverlay : EventEmitter<any>;

  private _mentorslist : Mentors[];

  constructor(private _service:MentorsListPresenterService, private _router:Router) {

    this.deleteMentor = new EventEmitter<number>();
    this.closeOverlay = new EventEmitter<any>();
   }

  ngOnInit(): void {

    this._service.delete$.subscribe(res=>{
      // console.log(res);
      this.deleteMentor.emit(res);
    })

      this._service.filterData$.subscribe(res=>{
        let filterData = this._mentorslist.filter(data=>{
          return data.city.toLowerCase() == res.city.toLowerCase();
        })
        console.log(filterData);
        
      });
      
      
  }

  onDelete(id:number){
    // console.log(id);
    this._service.onDelete(id);
  }

  filterOverlay(){
    this._service.openFilter();
  }

  

}

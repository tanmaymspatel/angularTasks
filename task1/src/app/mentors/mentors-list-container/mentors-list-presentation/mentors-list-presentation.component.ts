import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  private _mentorslist : Mentors[];

  constructor(private _service:MentorsListPresenterService) {

    this.deleteMentor = new EventEmitter<number>();
   }

  ngOnInit(): void {

    this._service.delete$.subscribe(res=>{
      // console.log(res);
      
      this.deleteMentor.emit(res);
    })

  }

  onDelete(id:number){
    // console.log(id);
    this._service.onDelete(id);
  }
}

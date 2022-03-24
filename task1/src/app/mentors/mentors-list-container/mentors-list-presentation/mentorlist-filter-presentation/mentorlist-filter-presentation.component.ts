import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Filterform } from 'src/app/mentors/model/mentors.model';
import { FilterPrsenterService } from '../mentorlist-filter-presenter/filter-prsenter.service';

@Component({
  selector: 'app-mentorlist-filter-presentation',
  templateUrl: './mentorlist-filter-presentation.component.html',
  styleUrls: ['./mentorlist-filter-presentation.component.scss'],
  viewProviders:[FilterPrsenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MentorlistFilterPresentationComponent implements OnInit {

  public filterForm: FormGroup;
  @Output() close : EventEmitter<Event>;
  @Output() filterFormData : EventEmitter<Filterform>;



  constructor(private _filterService : FilterPrsenterService) { 
    this.filterForm = this._filterService.buildForm();
    this.close = new EventEmitter();
    this.filterFormData = new EventEmitter();
  }

  ngOnInit(): void {
    this._filterService.filterFormData$.subscribe(res=>{
      this.filterFormData.emit(res);
    });
  }

  onFilter(){
    this._filterService.onFilter(this.filterForm);
    // console.log(this.filterForm);
  }

  closeOverlay(){
    this.close.emit();
  }

}

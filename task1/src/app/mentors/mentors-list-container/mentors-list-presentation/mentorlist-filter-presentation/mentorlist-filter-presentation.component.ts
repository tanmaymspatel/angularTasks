import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
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


  constructor(private _filterService : FilterPrsenterService) { 
    this.filterForm = this._filterService.buildForm();
    this.close = new EventEmitter();
  }

  ngOnInit(): void {

  }

  closeOverlay(){
    this.close.emit();
  }

}

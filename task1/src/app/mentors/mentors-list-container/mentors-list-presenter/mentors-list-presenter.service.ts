import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { Filterform, Mentors } from '../../model/mentors.model';
import { MentorlistFilterPresentationComponent } from '../mentors-list-presentation/mentorlist-filter-presentation/mentorlist-filter-presentation.component';

@Injectable()

export class MentorsListPresenterService {

  public delete$ : Observable<number>
  private _delete : Subject<number>
  private overlayRef : OverlayRef;

  private _filterData : Subject<any>;
  public filterData$ : Observable<any>;

  constructor(private _overlay : Overlay) {
    this._delete = new Subject<number>();
    this.delete$ = new Observable<number>();
    
    this.delete$ = this._delete.asObservable();

    
    this._filterData = new Subject();
    this.filterData$ = this._filterData.asObservable();
   }

   public onDelete(id: number){
    //  console.log(id);
     this._delete.next(id);
   }

   public openFilter(originalData : Mentors[]){
    const config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this._overlay.position().global().right();

    const overlayRef = this._overlay.create(config);
    const component = new ComponentPortal(MentorlistFilterPresentationComponent);
    const componentRef = overlayRef.attach(component);

    overlayRef.backdropClick().subscribe(()=>{
      overlayRef.detach();
    })

    componentRef.instance.close.subscribe(()=>{
      overlayRef.detach();
    });

    componentRef.instance.filterFormData.subscribe((res : Filterform[])=>{

      // filtering data
      let filteredData = [...originalData];
      let data = filteredData.map((item)=>{return Object.keys(item)});
      let dataKey = data[0];

      dataKey.forEach((item : any)=>{
        if (res[item]){
          filteredData = filteredData.filter((data:any)=>{
            return data[item].toString().toLowerCase() == res[item].toString().toLowerCase();
          })
        }
      })
      console.log(filteredData);
      originalData = filteredData;
      this._filterData.next(originalData);
      overlayRef.detach();
    })

   }
}

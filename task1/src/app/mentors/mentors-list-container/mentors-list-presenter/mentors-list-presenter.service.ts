import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { MentorlistFilterPresentationComponent } from '../mentors-list-presentation/mentorlist-filter-presentation/mentorlist-filter-presentation.component';

@Injectable()

export class MentorsListPresenterService {

  public delete$ : Observable<number>
  private _delete : Subject<number>
  private overlatRef : OverlayRef;

  constructor(private _overlay : Overlay) {
    this._delete = new Subject<number>();
    this.delete$ = new Observable<number>();

    this.delete$ = this._delete.asObservable();
   }

   public onDelete(id: number){
    //  console.log(id);
     this._delete.next(id);
   }

   public openFilter(){
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
    })

   }
}

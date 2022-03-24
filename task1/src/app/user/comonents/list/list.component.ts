import { Component, OnInit } from '@angular/core';
import { Category, user } from 'src/app/user/model/model';
import { ProductService } from '../../services/product.service';
import { Router} from '@angular/router';


import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FormComponent } from '../form/form.component';
import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: user[] = [];
  categories: Category[];
  nameSearch: any = "";
  overlayRef: OverlayRef;
  editData: user;
  id: number = 0;


  constructor(private productService: ProductService, private router: Router, private overlay: Overlay) { }

  ngOnInit(): void {
    this.getUsers();
    this.getCategories();
  }

  getUsers() {
    this.productService.getUserList().subscribe((data) => {
      this.users = data;
    }, (error) => {
      alert("Somethings Went Wrong");
    });
  }

  // editClick(id:number){
  //   this.router.navigate([`/list/edit/${id}`]);
  // }

  // deleteClick(id:number){
  //   this.productService.deleteUser(id).subscribe(res => {
  //     alert("user is deleted")
  //   })
  //   this.getUsers();
  // }

  deleteClick(id: number) {
    const config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(DeletePopupComponent);
    const componetRef = overlayRef.attach(component);

    componetRef.instance.val.subscribe((result)=>{
      if(result){
        this.productService.deleteUser(id).subscribe(res=>alert(`${id} record deleted succesfully`));
        overlayRef.detach(); 
        this.getUsers();
      }
      else{
        overlayRef.detach();
      }
    })
    
  }

  getCategories() {
    this.productService.getCategory().subscribe((categories: Category[]) => {
      this.categories = categories;
    }, (error: Category[]) => {
      alert("something went wrong")
    });
  }

  openOverlay(id: number) {
    const config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().right();
    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(FormComponent);
    const componetRef = overlayRef.attach(component);
    if (id > 0) {
      componetRef.instance.patchValue(id);
    }
    componetRef.instance.closeForm.subscribe(res => {
      overlayRef.detach();
    })
  }
}

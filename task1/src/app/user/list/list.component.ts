import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/model/model';
import { ProductService } from '../services/product.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: user[] =[];


  constructor(private productService: ProductService, private router : Router) { }

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers() {
    this.productService.getUserList().subscribe((data) => {
      this.users = data;
    },(error)=>{
      alert("Somethings Went Wrong");
    });
  }

  editClick(id:number){
    this.router.navigate([`/list/edit/${id}`]);
  }

  deleteClick(id:number){
    this.productService.deleteUser(id).subscribe(ers => {
      alert("user is deleted")
    })
    this.getUsers();
  }
}

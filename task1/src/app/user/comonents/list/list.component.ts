import { Component, OnInit } from '@angular/core';
import { Category, user } from 'src/app/user/model/model';
import { ProductService } from '../../services/product.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: user[] =[];
  categories: Category[];
  nameSearch : any = "";


  constructor(private productService: ProductService, private router : Router) { }

  ngOnInit(): void {
      this.getUsers();
      this.getCategories();
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
    this.productService.deleteUser(id).subscribe(res => {
      alert("user is deleted")
    })
    this.getUsers();
  }


  getCategories(){
    this.productService.getCategory().subscribe((categories:Category[])=>{
      this.categories = categories;
    }, (error : Category[])=>{
      alert("something wen wrong")
    });
  }
}

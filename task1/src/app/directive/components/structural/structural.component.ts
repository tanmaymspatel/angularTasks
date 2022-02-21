import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {

  //ngif 
  isValid:boolean=true;
  changeValue(valid:boolean): void{
    this.isValid=valid;
  }

  // ngswitch
  selectedItem:string = "";
  getValue(val:any){
    this.selectedItem = val.target.value;  
  }

  // ngfor
  listData = [
    {
      'id': '',
      'Name ': 'Tanmay Patel',
      'Product ': 'Laptop',
      'Price ' : '70000'
    },
    {
      'id': '',
      'Name': 'Rushabh Patel',
      'Product': 'PC',
      'Price' : '80000'
    },
    {
      'id': '',
      'Name': 'Prachi Patel',
      'Product': 'ipad',
      'Price' : '40000'
    },
    {
      'id': '',
      'Name': 'Yash Patel',
      'Product': 'Music System',
      'Price' : '8000'
    },
    {
      'id': '',
      'Name': 'Dharmit Shah',
      'Product': 'iwatch',
      'Price' : '40000'
    },
    {
      'id': '',
      'Name': 'Rahul Patel',
      'Product': 'Bluettoth Speaker',
      'Price' : '15000'
    },
    {
      'id': '',
      'Name': 'Meet Patel',
      'Product': 'Car Music System',
      'Price' : '50000'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

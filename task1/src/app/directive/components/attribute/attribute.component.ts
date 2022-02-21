import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

  listData = [
    {
      'id': '',
      'Name ': 'Tanmay Patel',
      'Product ': 'Laptop',
      'Price ' : '70000',
      'description':'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      'id': '',
      'Name': 'Rushabh Patel',
      'Product': 'PC',
      'Price' : '80000',
      'description':'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      'id': '',
      'Name': 'Prachi Patel',
      'Product': 'ipad',
      'Price' : '40000',
      'description':'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      'id': '',
      'Name': 'Yash Patel',
      'Product': 'Music System',
      'Price' : '8000',
      'description':'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      'id': '',
      'Name': 'Dharmit Shah',
      'Product': 'iwatch',
      'Price' : '40000',
      'description':'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      'id': '',
      'Name': 'Rahul Patel',
      'Product': 'Bluettoth Speaker',
      'Price' : '15000',
      'description':'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      'id': '',
      'Name': 'Meet Patel',
      'Product': 'Car Music System',
      'Price' : '50000',
      'description':'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

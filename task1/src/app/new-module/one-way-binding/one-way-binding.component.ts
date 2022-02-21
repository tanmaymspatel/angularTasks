import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {
  name : string = "Tanmay";

  myFunction(){
    alert("This is event binding");
  }

  constructor() { }

  ngOnInit(): void {
  }

}

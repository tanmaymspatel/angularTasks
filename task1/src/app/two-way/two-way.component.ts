import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss']
})
export class TwoWayComponent implements OnInit {
  
  name:string = "";

  constructor() { }

  ngOnInit(): void {
  }
 
}

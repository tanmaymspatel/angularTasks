import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentValue : string = "Spain";
  constructor() { }

    childData:string = "";
  parentMethod(data : string){
      this.childData = data;
  }

  ngOnInit(): void {
  }

}

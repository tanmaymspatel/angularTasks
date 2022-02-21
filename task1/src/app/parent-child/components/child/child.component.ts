import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() childValue : string = "Dubai";
  @Output() 
  notify : EventEmitter<string> = new EventEmitter();

  passData(){
    this.notify.emit("Messege From Child!");
  }
  constructor() { }

  ngOnInit(): void {
  }

}

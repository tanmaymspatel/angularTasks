import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  @Output() val : EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { 
  }

  ngOnInit(): void {
  }

  close(value: boolean) {
    this.val.emit(value);
  }
}

import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MentorsForm } from '../../mentors.model';
import { Mentors } from '../../model/mentors.model';
import { MentorsFormPresenterService } from '../mentors-form-presenter/mentors-form-presenter.service';

@Component({
  selector: 'app-mentors-form-presentation',
  templateUrl: './mentors-form-presentation.component.html',
  styleUrls: ['./mentors-form-presentation.component.scss'],
  viewProviders: [MentorsFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class MentorsFormPresentationComponent implements OnInit {

  @Input() public set mentorsData(value: Mentors | null) {
    // console.log(value);
    if (value) {
      this.formTitle = "Edit Customer";
      this.mentorsForm.patchValue(value);
      this._mentorsData = value;
    }
  }

  public get mentorsData(): Mentors | null {
    return this._mentorsData;
  }



  @Output() public addMentor: EventEmitter<MentorsForm>;
  @Output() public editMentor: EventEmitter<MentorsForm>;

  public mentorsForm: FormGroup;
  public formTitle: string;

  private _mentorsData: Mentors;

  constructor(private _mentorsFormService: MentorsFormPresenterService, private _location: Location) {
    // initialize the mentors form
    this.mentorsForm = this._mentorsFormService.buildForm();

    // initialize the addMentor property
    this.addMentor = new EventEmitter<MentorsForm>();
    this.editMentor = new EventEmitter<MentorsForm>();
    this.formTitle = 'Add Customer'
  }

  ngOnInit(): void {
    // subscribe value of mentor data
    this._mentorsFormService.mentorsFormData$.subscribe(res => {
      if (this.formTitle === "Add Customer") {
        this.addMentor.emit(res);
      } else {
        this.editMentor.emit(res);
      }
    }
    )
  }

  // passing data to presener
  onSubmit() {
    // console.log(this.mentorsForm);
    this._mentorsFormService.onSubmit(this.mentorsForm);
  }

  onCancel() {
    this._location.back();
  }
}

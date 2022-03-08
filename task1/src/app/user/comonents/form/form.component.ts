import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, user } from 'src/app/user/model/model';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  categoryOptions!: Category[];
  userToEdit!: number;
  @Output() closeForm : EventEmitter<any>= new EventEmitter<any>();

  userForm = {} as FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userForm = this.buildUserForm();
    this.getCategoryOptions();
    // this.userToEdit = this.activatedRoute.snapshot.params['id'];
    // if (this.userToEdit) {
    //   this.productService.getUserById(this.userToEdit).subscribe(user => this.userForm.patchValue(user));
    // }
  }
  buildUserForm(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      lastName: ['', Validators.required],
      email: [null, [Validators.minLength(7), Validators.maxLength(12), Validators.email]],
      phoneNumber: [null, Validators.required],
      gender: [],
      department: [],
      dateOfEmployement: [null]
    })
  }
  patchValue(id:number){
    return this.productService.getUserById(id).subscribe(res=>{
      this.userForm.patchValue(res);
    })
  }
  // resetForm() {
  //   this.userForm.reset();
  // }
  saveData() {
    if (this.userToEdit) {
      this.productService.editUser({ id: this.userToEdit, ...this.userForm.value }).subscribe(res => {
        alert('save form');
      }, (error) => {
        alert('data not save');
      })
      this.closeForm.emit();
    } else {
      console.log(this.userForm)
      this.productService.saveUser(this.userForm.value).subscribe(res => {
        alert('save form');
      }, (error) => {
        alert('data not save');
      })
       this.closeForm.emit();
    }
    // this.router.navigateByUrl('/list')
  }


  // get categories from service
  getCategoryOptions() {
    this.productService.getCategory().subscribe((categoryOption: Category[]) => {
      this.categoryOptions = categoryOption;
    }, (error: Category[]) => {
      alert("Somethings Went Wrong");
    });
  }
  onclose(){
    this.closeForm.emit();
  }
}





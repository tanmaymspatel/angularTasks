import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, Office, User2 } from '../models/user2';
import { UserFormService } from '../services/user-form.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.scss']
})
export class User2Component implements OnInit {

  userForm: FormGroup;
  clientNameList: Client[];
  officeList: Office[];
  userList: User2[];
  userToEdit: number;
  formShow:boolean = false;
  nameSearch : any = "";

  constructor(private userService: UserFormService, private router: Router, private activatedRoute: ActivatedRoute) { }

 
  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      primaryContactNumber: new FormControl('', Validators.required),
      clientName: new FormControl('', Validators.required),
      office: new FormControl('', Validators.required),
    });
 
    this.getClientNames();
    this.getOfficeNames();
    this.getUserData();
    this.userToEdit = this.activatedRoute.snapshot.params['id'];
    if (this.userToEdit) {
      this.userService.getUserById(this.userToEdit).subscribe((user) => {
        this.userForm.patchValue(user);
      });
    }

  }

// click on new user
clickNewUser(){
  this.formShow = !this.formShow;

}
  // click on save btn
  saveFormData() {
    if (this.userToEdit) {
      this.userService.editUser({ id: this.userToEdit, ...this.userForm.value }).subscribe(res => {
        alert('save form');
        this.getUserData();
      }, (error) => {
        alert('edited data not save');
      });
     
    } else {
      console.log(this.userForm);
      this.userService.saveUser(this.userForm.value).subscribe(res => {
        alert("Data is saved");
        this.getUserData();
      }, (error) => {
        alert("Data is not saved");
      });  
      
    }
    this.userForm.reset();
    this.router.navigate([`/assessment`]);
    this.formShow = false;
    
  }

  // click on cancel btn
  cancelData() {
    this.userForm.reset();
    this.getUserData();
    this.router.navigate([`/assessment`]);
  }


  //  get client names from json server
  getClientNames() {
    this.userService.getClientName().subscribe((clients) => {
      this.clientNameList = clients;
    }, (error) => {
      debugger
      // alert("Somethings Went Wrong");
    })
  }

  // get office names fron json server
  getOfficeNames() {
    this.userService.getOfiice().subscribe((officeData => {
      this.officeList = officeData;
    }))
  }

  // print data into the table
  getUserData() {
    this.userService.getUserDataList().subscribe((data) => {
      this.userList = data;
    }, (error) => {
      alert("some thing went wrong")
    });
  }

  // while clicking on edit button
  editClick(id: number) {
    this.router.navigate([`/assessment/edit/${id}`]);
    this.formShow = true;
  }

  // delete data
  deleteClick(index:number){
    this.userService.deleteUser(index).subscribe((res:number)=>{
      alert("User is deleted");
      this.getUserData();
    })
    
    }

}

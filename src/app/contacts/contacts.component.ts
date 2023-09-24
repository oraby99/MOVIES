import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    contactsForm:any =  new FormGroup({
    clientName:new FormControl('' ,
     [ Validators.required , Validators.minLength(2) , Validators.maxLength(8) ]),
    clientAge:new FormControl('' , [Validators.required ,Validators.min(10) , Validators.max(80)]),
    clientMail:new FormControl('' , [Validators.required ,Validators.email]),
    messageTitle:new FormControl('' , Validators.pattern(/^[a-z]/)),
    messageBody:new FormControl(''),
  });

contactsList:any = [];
  saveForm()
  {
    this.contactsList.push(this.contactsForm.value());
    localStorage.setItem("contacts" , JSON.stringify(this.contactsList))
    console.log(this.contactsForm)
  }
  constructor() { }

  ngOnInit(): void {
  }

}

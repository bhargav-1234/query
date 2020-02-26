import { Component, OnInit, Input } from "@angular/core";
// import { Pages } from "../..//entities/pages";
import { NgForm } from "@angular/forms";
import { Designation } from "src/app/entities/Designation";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  // pages: Pages;

  // constructor() {
  //   this.pages = new Pages();
  // }

  // ngOnInit() {}

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }
  designation: Designation;

  constructor() {
    this.designation = new Designation();
  }

  ngOnInit() {}
  submit() {
    console.log(this.designation);
  }
}

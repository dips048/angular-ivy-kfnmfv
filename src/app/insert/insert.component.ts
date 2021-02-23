import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { FireService } from "../fire.service";

@Component({
  selector: "app-insert",
  templateUrl: "./insert.component.html"
})
export class InsertComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fire: FireService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      age: ["", Validators.required],
      email: ["", Validators.required],
      contact: ["", Validators.required]
    });
  }

  resetFields() {
    this.form = this.fb.group({
      id: new FormControl("", Validators.required),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      age: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      contact: new FormControl("", Validators.required)
    });
  }

  onSubmit(value) {
    console.log(value);
    this.fire.addUser(value).then(res => {
      this.resetFields();
      this.router.navigate(["dashboard"]);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submittedData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    // use this.loginForm.setValue() to pre-populate the form,
    // if needed, and model data is already available

    // Note: if model data comes from async service call, ngOnChanges
    // is a better lifecycle hook. In this case, the OnChanges interface
    // should be implemented
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  formHandler() {
    this.submittedData = this.loginForm.value;
  }

}

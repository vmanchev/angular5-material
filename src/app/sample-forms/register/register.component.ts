import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  model = new User();

  constructor() { }

  ngOnInit() {

  }

  handleForm() {
    // this.model shold contain the form data
  }
}

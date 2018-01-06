import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { CheckboxMinLength } from '../../app-validators/checkbox-min-length.validator';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  fullForm: FormGroup;
  interestsGroup: FormGroup;
  submittedData: any;

  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  skillsList = [
    { id: 1, label: 'jQuery' },
    { id: 2, label: 'AngularJS' },
    { id: 3, label: 'Angular' },
    { id: 4, label: 'Ionic' },
    { id: 5, label: 'React' },
    { id: 6, label: 'Vue.js' }
  ];



  maxDate = new Date(2000, 0, 0);

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    // use this.fullForm.setValue() to pre-populate the form,
    // if needed, and model data is already available

    // Note: if model data comes from async service call, ngOnChanges
    // is a better lifecycle hook. In this case, the OnChanges interface
    // should be implemented
  }

  createForm() {

    this.fullForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      state: ['', Validators.required],
      toc: ['', Validators.required],
      os: ['', Validators.required],
      dob: ['', Validators.required],
      email_notifications: [false],
      skills: new FormArray([
        new FormControl({ id: 4, label: 'Ionic' }),
        new FormControl({ id: 5, label: 'React' }),
      ], [Validators.required, CheckboxMinLength(2)])
    });


  }

  onCheckChange(event) {
    const formArray: FormArray = this.fullForm.get('skills') as FormArray;

    /* Selected */
    if (event.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.source.value));
    } else {
      // find the unselected element
      let i = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value.id === event.source.value.id) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }

  isChecked(skill) {

    let checked = false;

    const formArray: FormArray = this.fullForm.get('skills') as FormArray;

    formArray.controls.forEach((ctrl: FormControl) => {
      if (ctrl.value.id === skill.id) {
        checked = true;
      }
    });

    return checked;
  }

  formHandler() {
    this.submittedData = this.fullForm.value;
  }

}

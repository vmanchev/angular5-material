import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

import { AppModule } from '../../app.module';
import { AppSharedModule } from '../../app-shared/app-shared.module';
import { SampleFormsModule } from '../sample-forms.module';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { CheckboxMinLength } from '../../app-validators/checkbox-min-length.validator';

import { FullComponent } from './full.component';

describe('FullComponent', () => {
  let component: FullComponent;
  let fixture: ComponentFixture<FullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AppModule,
        AppSharedModule,
        AppRoutingModule,
        SampleFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onCheckChange', () => {

    beforeEach(() => {
      const event = {
        checked: true,
        source: {
          value: {
            id: 123
          }
        }
      };

      component.onCheckChange(event);
    });

    it('should add new element to the list of checked elements', () => {

      const selectedValues = component.fullForm.get('skills') as FormArray;

      expect(component.isChecked({ id: 123 })).toBeTruthy();
    });

    it('should remove an element from the list of checked elements', () => {

      const event = {
        checked: false,
        source: {
          value: {
            id: 123
          }
        }
      };

      component.onCheckChange(event);

      const selectedValues = component.fullForm.get('skills') as FormArray;

      expect(component.isChecked(event.source.value)).toBeFalsy();

    });

  });

  describe('formHandler', () => {

    beforeEach(() => {
      component.createForm();
      component.fullForm.controls['email'].setValue('test@test.com');
      component.fullForm.controls['password'].setValue('abc123');
      component.fullForm.controls['first_name'].setValue('John');
      component.fullForm.controls['last_name'].setValue('Doe');
      component.fullForm.controls['state'].setValue('Arizona');
      component.fullForm.controls['toc'].setValue(true);
      component.fullForm.controls['os'].setValue('Android');
      component.fullForm.controls['dob'].setValue('1985-01-15');
      component.fullForm.controls['email_notifications'].setValue(true);
      component.fullForm.controls['skills'].setValue([
        { id: 1, label: 'jQuery' },
        { id: 2, label: 'AngularJS' }]);
      component.formHandler();
    });


    it('should pass the form data to local variable', () => {
      expect(component.submittedData).toEqual({
        email: 'test@test.com',
        password: 'abc123',
        first_name: 'John',
        last_name: 'Doe',
        state: 'Arizona',
        toc: true,
        os: 'Android',
        dob: '1985-01-15',
        email_notifications: true,
        skills: [{ id: 1, label: 'jQuery' },
        { id: 2, label: 'AngularJS' }]
      });
    });

  });
});

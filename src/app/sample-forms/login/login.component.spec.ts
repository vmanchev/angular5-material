import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AppModule } from '../../app.module';
import { AppSharedModule } from '../../app-shared/app-shared.module';
import { SampleFormsModule } from '../sample-forms.module';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from '../../app-routing/app-routing.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('createForm', () => {

    it('should setup the login form', () => {
      component.createForm();

      expect(component.loginForm instanceof FormGroup).toBeTruthy();
    });

  });

  describe('form validators', () => {

    beforeEach(() => {
      component.createForm();
    });

    it('should set initial form validation state to invalid', () => {
      expect(component.loginForm.valid).toBeFalsy();
    });

    it('shold validate email address', () => {
      const emailField = component.loginForm.controls['email'];

      expect(emailField.errors['required']).toBeTruthy();
      expect(emailField.errors['email']).toBeTruthy();

      emailField.setValue('test');
      expect(emailField.errors['required']).toBeFalsy();
      expect(emailField.errors['email']).toBeTruthy();

      emailField.setValue('test@test.com');
      expect(emailField.errors).toBeNull();
    });

    it('should validate password', () => {
      const passwordField = component.loginForm.controls['password'];

      expect(passwordField.errors['required']).toBeTruthy();

      passwordField.setValue('a');
      expect(passwordField.errors).toBeNull();
    });

  });

  describe('formHandler', () => {

    beforeEach(() => {
      component.createForm();
      component.loginForm.controls['email'].setValue('test@test.com');
      component.loginForm.controls['password'].setValue('abc123');
      component.formHandler();
    });


    it('should pass the form data to local variable', () => {
      expect(component.submittedData).toEqual({
        email: 'test@test.com',
        password: 'abc123'
      });
    });
  });
});

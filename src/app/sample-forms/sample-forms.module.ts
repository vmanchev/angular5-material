import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { RegisterComponent } from './register/register.component';
import { FullComponent } from './full/full.component';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule
  ],
  declarations: [LoginComponent, RegisterComponent, FullComponent]
})
export class SampleFormsModule { }

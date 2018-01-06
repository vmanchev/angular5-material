import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { SampleFormsModule } from '../sample-forms/sample-forms.module';
import { LoginComponent } from '../sample-forms/login/login.component';
import { RegisterComponent } from '../sample-forms/register/register.component';
import { FullComponent } from '../sample-forms/full/full.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-root',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'full',
    component: FullComponent
  }
];

@NgModule({
  imports: [
    SampleFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule {
}
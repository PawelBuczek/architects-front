import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterCandidateComponent} from './register/candidate/register-candidate.component';
import {RouterModule, Routes} from '@angular/router';
import {MainViewComponent} from './main-view/main-view.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RegisterMentorComponent} from './register/mentor/register-mentor.component';

const root: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: 'register-candidate',
  component: RegisterCandidateComponent
},
  {
    path: 'register-mentor',
    component: RegisterMentorComponent
  }, {
    path: 'main',
    component: MainViewComponent
  }, {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterCandidateComponent,
    RegisterMentorComponent,
    MainViewComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(root)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


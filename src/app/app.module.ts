import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterCandidateComponent} from './register/candidate/register-candidate.component';
import {RouterModule, Routes} from '@angular/router';
import {MainViewComponent} from './main-view/main-view.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RegisterMentorComponent} from './register/mentor/register-mentor.component';
import {AdminConsoleComponent} from './admin-console/admin-console.component';
import {AuthorizationInterceptor} from './authorization.interceptor';

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
  }, {
    path: 'admin-console',
    component: AdminConsoleComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterCandidateComponent,
    RegisterMentorComponent,
    MainViewComponent,
    ForgotPasswordComponent,
    AdminConsoleComponent
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
  providers: [{
    useClass: AuthorizationInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}


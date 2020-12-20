import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute, private router: Router) {
  }

  onFormSubmit(): void {
    console.log('Submitted Forgot Password Form');
    this.router.navigateByUrl('/');
  }

}

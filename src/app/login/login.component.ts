import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute, private router: Router) {
  }

  onFormSubmit(): void {
    console.log('Zatwierdzono formularz logowania');
    this.router.navigateByUrl('/main');
  }

}

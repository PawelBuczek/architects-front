import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Candidate} from '../model/candidate';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent{

  private url = 'http://localhost:8080/candidate';
  newCandidate: Candidate = {
    firstName: '',
    lastName: '',
    primaryEmail: '',
    secondaryEmail: '',
    phoneNumber: ''
  };

  createBabysitter(): void {
    this.httpClient.post<Candidate>(this.url, this.newCandidate)
      .subscribe();
    this.router.navigateByUrl('/');
  }


  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute, private router: Router) {
  }

}

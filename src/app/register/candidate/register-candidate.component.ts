import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Candidate} from '../../model/candidate';
import {CandidateAndUserDto} from '../../model/candidateAndUserDto';

@Component({
  selector: 'app-register-candidate',
  templateUrl: './register-candidate.component.html'
})
export class RegisterCandidateComponent {

  private url = 'http://localhost:8080/candidate';
  newCandidate: Candidate = {
    firstName: '',
    lastName: '',
    phoneNr: ''
  };
  newCandidateAndUser: CandidateAndUserDto = {
    username: '',
    password: '',
    primaryEmail: '',
    secondaryEmail: '',
    firstName: '',
    lastName: '',
    phoneNr: ''
  };

  registerCandidate(): void {
    this.httpClient.post<Candidate>(this.url, this.newCandidate)
      .subscribe();
    this.router.navigateByUrl('/');
  }

  registerCandidateAndUser(): void {
    this.httpClient.post<Candidate>(this.url + 'user', this.newCandidateAndUser)
      .subscribe();
    this.router.navigateByUrl('/');
  }

  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute, private router: Router) {
  }

}

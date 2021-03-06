import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Mentor} from '../../model/mentor';
import {MentorAndUserDto} from '../../model/mentorAndUserDto';

@Component({
  selector: 'app-register-mentor',
  templateUrl: './register-mentor.component.html'
})
export class RegisterMentorComponent {

  private url = 'http://localhost:8080/mentor';
  newMentor: Mentor = {
    firstName: '',
    lastName: '',
    phoneNr: ''
  };

  newMentorAndUser: MentorAndUserDto = {
    username: '',
    password: '',
    primaryEmail: '',
    secondaryEmail: '',
    firstName: '',
    lastName: '',
    phoneNr: ''
  };

  registerMentor(): void {
    this.httpClient.post<Mentor>(this.url, this.newMentor)
      .subscribe();
    this.router.navigateByUrl('/');
  }

  registerMentorAndUser(): void {
    this.httpClient.post<Mentor>(this.url + 'user', this.newMentorAndUser)
      .subscribe();
    this.router.navigateByUrl('/');
  }

  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute, private router: Router) {
  }

}

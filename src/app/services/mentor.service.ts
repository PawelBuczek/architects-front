import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Candidate} from '../model/candidate';
import {Mentor} from '../model/mentor';


@Injectable({
  providedIn: 'root'
})

export class MentorService {
  constructor(public httpClient: HttpClient) {
  }

  // newCandidate: User = {
  //   id: 0,
  //   firstName: '',
  //   lastName: '',
  //   primaryEmail: '',
  //   secondaryEmail: '',
  //   phoneNumber: ''
  // };

  mentors: Mentor[] = [];

  private url = 'http://localhost:8080/mentor';

  loadData(): void {
    this.httpClient.get<Mentor[]>(this.url)
      .subscribe(mentors => this.mentors = mentors);
  }

  delete(id: number): void {
    this.httpClient.delete(this.url + '/' + id)
      .subscribe(() => this.loadData());
  }

  // createBabysitter(): void {
  //   this.httpClient.post<User>(this.url, this.newCandidate)
  //     .subscribe(babysitter => this.candidates.push());
  //
  // }

  getMentor(mentor: Mentor, mentorId: number): void {
    this.httpClient.get<Candidate>(this.url + mentorId)
      .subscribe(mentorFromHttp => mentor = mentorFromHttp);
  }
}

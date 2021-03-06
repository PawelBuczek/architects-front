import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Candidate} from '../model/candidate';


@Injectable({
  providedIn: 'root'
})

export class CandidateService {
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

  candidates: Candidate[] = [];

  private url = 'http://localhost:8080/candidate';

  loadData(): void {
    this.httpClient.get<Candidate[]>(this.url)
      .subscribe(candidates => this.candidates = candidates);
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

  getBabysitter(babysitter: Candidate, babysitterId: number): void {
    this.httpClient.get<Candidate>(this.url + babysitterId)
      .subscribe(babySitterFromHttps => babysitter = babySitterFromHttps);
  }
}

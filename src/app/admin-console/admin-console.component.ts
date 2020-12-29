import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Candidate} from '../model/candidate';
import {Mentor} from '../model/mentor';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html'
})
export class AdminConsoleComponent implements OnInit {

  candidates: Candidate[];
  mentors: Mentor[];

  constructor(public httpClient: HttpClient, private activeRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  getCandidates(): void {
    this.httpClient.get<Candidate[]>('http://localhost:8080/candidate')
      .subscribe(candidates => this.candidates = candidates);
  }

  getMentors(): void {
    this.httpClient.get<Mentor[]>('http://localhost:8080/mentor')
      .subscribe(mentors => this.mentors = mentors);
  }
}

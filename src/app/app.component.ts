import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'architects-front';

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    // this.idleLogout();
  }

  logout(): void {
    localStorage.removeItem('authorizationHeader');
    // setTimeout!
    this.router.navigate([''])
      .then(() => location.reload());
  }

  checkIfLoggedIn(): boolean {
    return localStorage.getItem('authorizationHeader') !== null;
  }

// idleLogout(): void {
//   let time: number;
//   window.onload = () => resetTimer();
//   function resetTimer(): void {
//     clearTimeout(time);
//     time = setTimeout(() => localStorage.removeItem('authorizationHeader'), 60000);
//   }
}

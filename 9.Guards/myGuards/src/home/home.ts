import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  constructor(private router: Router) {}
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}

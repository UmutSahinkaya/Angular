import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  constructor(
    private activated: ActivatedRoute)
     {
    this.activated.params.subscribe((params) => {
      console.log(params['params']);
    });
  }
}

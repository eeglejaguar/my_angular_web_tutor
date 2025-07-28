import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    title.setTitle('Loving Book Sitting Services | Hamilton');
    meta.updateTag({ name: 'description', content: "Trustworthy book sitting for cats, dogs, and small animals in Hamilton. Experienced, caring, and reliable." });
  }

  learnMore() {
    this.router.navigate(['/services']);
  }
}
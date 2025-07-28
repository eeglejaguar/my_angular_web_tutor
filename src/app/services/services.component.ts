import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    title.setTitle('Book Sitting Services in Hamilton | Loving Book Care');
    meta.updateTag({ name: 'description', content: "Explore our reliable book sitting services including daily care, walking, playtime, and overnight stays." });
  }

  contactUs() {
    window.alert('Thank you for your interest! Please call us at (555) 123-4567.');
  }
}

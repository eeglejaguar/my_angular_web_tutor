import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router, private title: Title, private meta: Meta) {
    title.setTitle('About Our Hamilton Book Sitters | Loving Book Care');
    meta.updateTag({ name: 'description', content: "Meet our passionate team providing loving, professional book sitting services in Hamilton." });
  }

  goToServices() {
    this.router.navigate(['/services']);
  }
}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent {
  @Input() headline: string = '';
  @Input() subtext: string = '';
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '';
  
  // This reusable CTA component is used on both the Home and Blog pages.
}

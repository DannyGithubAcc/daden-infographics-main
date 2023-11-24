// src/app/components/heading/label.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  styleUrls: ['./label.css'],
  template: `
    <p class="label">{{ text }}</p>
  `,
})
export class labelComponent {
  @Input() text: string = '';
}

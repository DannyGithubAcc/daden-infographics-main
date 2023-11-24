// src/app/components/heading/heading5.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading5',
  styleUrls: ['./heading5.css'],
  template: `
    <h5>{{ text }}</h5>
  `,
})
export class Heading5Component {
  @Input() text: string = '';
}

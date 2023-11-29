// src/app/components/heading/heading2.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading2',
  styleUrls: ['./heading2.css'],
  template: `
    <h2>{{ text }}</h2>
  `,
})
export class Heading2Component {
  @Input() text: string = '';
}

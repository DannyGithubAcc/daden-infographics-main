// src/app/components/heading/heading4.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading3',
  styleUrls: ['./heading3.css'],
  template: `
    <h3>{{ text }}</h3>
  `,
})
export class Heading3Component {
  @Input() text: string = '';
}

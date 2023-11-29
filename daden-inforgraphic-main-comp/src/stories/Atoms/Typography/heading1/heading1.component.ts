// src/app/components/heading/heading1.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading1',
  styleUrls: ['./heading1.css'],
  template: `
    <h1>{{ text }}</h1>
  `,
})
export class Heading1Component {
  @Input() text: string = '';
}

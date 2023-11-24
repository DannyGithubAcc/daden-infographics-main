// src/app/components/heading/heading4.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading4',
  styleUrls: ['./heading4.css'],
  template: `
    <h4>{{ text }}</h4>
  `,
})
export class Heading4Component {
  @Input() text: string = '';
}

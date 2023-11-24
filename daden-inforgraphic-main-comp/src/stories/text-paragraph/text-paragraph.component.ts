// src/app/components/text-paragraph/text-paragraph.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-paragraph',
  styleUrls: ['./text-paragraph.css'],
  template: `
    <p [ngClass]="{ 'opening': opening }">{{ text }}</p>
  `,
})
export class TextParagraphComponent {
  @Input() text: string = '';
  @Input() opening: boolean = false;
}

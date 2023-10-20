import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-infographic',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './infographic.component.html',
  styleUrls: ['./infographic.component.css']
})
export class InfographicComponent {

}

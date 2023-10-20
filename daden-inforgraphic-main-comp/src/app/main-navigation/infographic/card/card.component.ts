import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
// public title: string[];
  
public listCards = [
  {id: 1, title:'Superman'},
  {id: 2, title:'Batman'},
  {id: 5, title:'BatGirl'},
  {id: 3, title:'Robin'}
];

}

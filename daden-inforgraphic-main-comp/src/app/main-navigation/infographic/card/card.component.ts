import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private fb: FormBuilder){}
  datatForm!: FormGroup;

  ngOnInit(){
    this.datatForm = this.fb.group({
      bigger: new FormControl(''),
      smaller: new FormControl(''),
      checker: new FormControl(''),
    });

  }
// public title: string[];

  
public listCards = [
  {id: 1, title:'Superman'},
  {id: 2, title:'Batman'},
  {id: 3, title:'BatGirl'},
  {id: 4, title:'Robin'},
  {id: 5, title:'Antman'},
  {id: 6, title:'Spiderman'},
  {id: 7, title:'Manthing'},
  {id: 2, title:'Batman'},
  {id: 3, title:'BatGirl'},
  {id: 4, title:'Robin'},
  {id: 5, title:'Antman'},
  {id: 6, title:'Spiderman'},
  {id: 7, title:'Manthing'}
];

}

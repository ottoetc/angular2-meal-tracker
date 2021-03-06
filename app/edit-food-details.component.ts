import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <h3>Edit:</h3>
    <input [(ngModel)]="food.name"/>
    <input [(ngModel)]="food.calories"/>
    <input [(ngModel)]="food.description"/>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}

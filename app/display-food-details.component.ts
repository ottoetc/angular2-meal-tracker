import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'display-food-details',
  inputs: ['food'],
  template: `
    <h5>{{ food.calories }}</h5>
    <h5>{{ food.description }}</h5>
  `
})
export class DisplayFoodDetailsComponent {
  public food: Food;
}

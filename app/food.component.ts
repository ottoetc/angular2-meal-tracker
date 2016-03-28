import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
    <h3>{{ food.name }}</h3>
    <h5>Calories: {{ food.calories }}</h5>
    <h5>{{ food.description }}</h5>
  `
})
export class FoodComponent {
  public food: Food;
}

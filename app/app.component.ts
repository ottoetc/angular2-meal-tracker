import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Foods I Ate Today</h1>
      <food-list
        [foodList]="foods" (onFoodClick)="foodWasClicked($event)">
      </food-list>
    </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Pizza", 350, "Greasy and delicious", 0),      new Food("Eggs", 150, "Breakfast", 1),
      new Food("Apple", 90, "A fruit", 2)
    ];
  }
  foodWasClicked(clickedFood: Food): void {
    console.log("Parent: " + clickedFood);
  }
}

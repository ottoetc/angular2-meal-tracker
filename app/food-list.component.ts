import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { DisplayFoodDetailsComponent } from './display-food-details.component';
import { NewFoodComponent } from './new-food.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodClick'],
  directives: [FoodComponent, EditFoodDetailsComponent, DisplayFoodDetailsComponent, NewFoodComponent],
  template: `
    <div *ngFor="#currentFood of foodList">
      <food-display (click)="foodClicked(currentFood)" [class.selected]="currentFood === selectedFood" [food]="currentFood">
      </food-display>
      <display-food-details *ngIf="currentFood === selectedFood" [food]="selectedFood">
      </display-food-details>
      <edit-food-details *ngIf="currentFood === selectedFood" [food]="selectedFood">
      </edit-food-details>

    </div>

    <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodClick: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodClick = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log("Child: " + clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodClick.emit(clickedFood);
  }
  createFood(newFoodArray: string[]): void {
    this.foodList.push(
      new Food(newFoodArray[0], parseInt(newFoodArray[1]), newFoodArray[2], this.foodList.length)
    );
  }
}

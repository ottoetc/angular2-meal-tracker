import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <h3>Add a Food you ate!</h3>
    <input placeholder="Name" #newName>
    <input placeholder="Calories" #newCalories>
    <input placeholder="Description" #newDescription>
    <button (click)="addFood(newName, newCalories, newDescription)">Add</button>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(inputName: HTMLInputElement, inputCalories: HTMLInputElement, inputDescription: HTMLInputElement){
    var newFoodArray = [inputName.value, inputCalories.value, inputDescription.value];
    this.onSubmitNewFood.emit(newFoodArray);
    inputName.value = "";
    inputCalories.value = "";
    inputDescription.value = "";
  }
}

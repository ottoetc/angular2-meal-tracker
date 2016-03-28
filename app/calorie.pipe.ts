import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredCalorieState = args[0];
    if(desiredCalorieState === "healthy") {
      return input.filter(function(food) {
        return food.calories <= 300;
      });
    } else if (desiredCalorieState === "notHealthy") {
      return input.filter(function(food) {
        return food.calories > 300;
      });
    } else {
      return input;
    }
  }
}

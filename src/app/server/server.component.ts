import { Component } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import {Ingredient} from '../../shared/ingredients.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})


export class ServerComponent {
    isMatch = true;
    ingredient: string;
    recipeName: string;



/*    students: Student[] = [new Student('Bill Gates', 'Computer Science'),
                           new Student('Steve Jobs', 'Computer Science'),
                           new Student('Elon Musk', 'Computer Science')];*/

    usrInput = {'egg' : 0, 'milk' : 0, 'flour': 0};

    recipes: Recipe[] = [ new Recipe('Crepe Cake', 'egg', 'milk', 'flour'),
                          new Recipe('Pancake', Ingredient[0], Ingredient[1], Ingredient[2])];

    counterPlus(ingredient) {
     this.usrInput[ingredient] ++;
    }

    resetCounter(ingredient) {
      this.usrInput[ingredient] = 0;
    }

}


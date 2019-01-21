import { Ingredient} from './ingredients.model';

export class Recipe {
  constructor(public name: string,
              public A: Ingredient,
              public B: Ingredient,
              public C: Ingredient) {
  }
}

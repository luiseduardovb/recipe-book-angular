import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a Test',
      'https://static.onecms.io/wp-content/uploads/sites/43/2020/07/22/8000900-2000.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

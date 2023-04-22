import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcHjFzVCSAR7q-4iQSTahMzwEyYRTIm9fzg&usqp=CAU'
    ),
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcHjFzVCSAR7q-4iQSTahMzwEyYRTIm9fzg&usqp=CAU'
    ),
  ];
}

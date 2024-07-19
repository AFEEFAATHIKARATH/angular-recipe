import { Component, OnInit } from '@angular/core';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recipes: any[] = [];
  filteredRecipes: any[] = [];
  searchTerm: string = '';
  mealType: string = '';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.recipes;
      this.filteredRecipes = data.recipes;
    });
  }

  onSearch(term: string): void {
    this.searchTerm = term.toLowerCase();
    this.applyFilters();
  }

  onFilter(mealType: string): void {
    this.mealType = mealType;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredRecipes = this.recipes.filter(recipe => {
      const matchesSearchTerm = this.searchTerm ? recipe.name.toLowerCase().includes(this.searchTerm) || recipe.cuisine.toLowerCase().includes(this.searchTerm) : true;
      const matchesMealType = this.mealType ? recipe.mealType === this.mealType : true;
      return matchesSearchTerm && matchesMealType;
    });
  }
}

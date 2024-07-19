import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MealTypeFilterComponent } from './components/meal-type-filter/meal-type-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    SearchBarComponent,
    MealTypeFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog
} from '@angular/material/dialog';
import { CreateRecipeFormComponent } from '../create-recipe-form/create-recipe-form.component';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RecipeCardComponent,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  recipes = [];

  constructor(public dialog: MatDialog, 
    public authService:AuthServiceService,
    private recipeService:RecipeServiceService) {

  }
  handleOpenCreateRecipeForm(){
    this.dialog.open(CreateRecipeFormComponent);
  }

  ngOnInit() {
    this.authService.getUserProfile().subscribe();
    this.recipeService.getRecipes().subscribe();
    this.recipeService.recipeSubject.subscribe((state) => {
      console.log("state ", state)
      this.recipes = state.recipes
    });
  }
}

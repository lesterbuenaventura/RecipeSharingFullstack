import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
  selector: 'app-create-recipe-form',
  standalone: true,
  imports: [FormsModule,
     MatFormFieldModule, 
     MatInputModule, 
     MatButtonModule,
     MatRadioModule],
  templateUrl: './create-recipe-form.component.html',
  styleUrl: './create-recipe-form.component.scss'
})
export class CreateRecipeFormComponent {

  recipeItem:any = {
    title: "",
    description:"",
    foodType:"",
    image: ""
  }

  constructor(private recipeService:RecipeServiceService) {

  }

  onSubmit(){
    console.log("values ", this.recipeItem)
    this.recipeService.createRecipe(this.recipeItem).subscribe({
      next:data => console.log("create recipe ", data),
      error: error => console.log("error ", error)
    });
  }
}

import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-recipe-form',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatRadioModule],
  templateUrl: './update-recipe-form.component.html',
  styleUrl: './update-recipe-form.component.scss'
})
export class UpdateRecipeFormComponent {
  recipeItem:any = {
    title: "",
    description:"",
    foodType:"",
    image: ""
  }
  constructor(@Inject(MAT_DIALOG_DATA) public recipe:any, 
  private recipeService:RecipeServiceService){}

  onSubmit(){
    console.log("values ----- ", this.recipeItem);
    this.recipeService.updateRecipe(this.recipeItem).subscribe({
      next:data=>console.log("update ",data),
      error:error=>console.log("error ",error)
    });
    
  }

  ngOnInit(){
    this.recipeItem = this.recipe;
  }
}

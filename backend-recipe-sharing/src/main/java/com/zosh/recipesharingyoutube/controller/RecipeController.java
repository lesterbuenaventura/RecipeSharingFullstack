package com.zosh.recipesharingyoutube.controller;

import com.zosh.recipesharingyoutube.model.Recipe;
import com.zosh.recipesharingyoutube.model.User;
import com.zosh.recipesharingyoutube.service.RecipeService;
import com.zosh.recipesharingyoutube.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private RecipeService recipeService;

    private UserService userService;

    public RecipeController(RecipeService recipeService, UserService userService) {
        this.recipeService = recipeService;
        this.userService = userService;
    }

    @PostMapping()
    public Recipe createRecipe(@RequestBody Recipe recipe,
                               @RequestHeader("Authorization")String jwt) throws Exception {
        User user = userService.findUserByJwt(jwt);

        Recipe createdRecipe = recipeService.createRecipe(recipe, user);
        return createdRecipe;
    }

    @GetMapping()
    public List<Recipe> getAllRecipe()  {
        List<Recipe> recipes = recipeService.findAllRecipe();
        return recipes;
    }

    @DeleteMapping("/{recipeId}")
    public String deleteRecipe(@PathVariable Long recipeId) throws Exception {
        recipeService.deleteRecipe(recipeId);
        return "recipe deleted successfully";
    }

    @PutMapping("/{id}")
    public Recipe updateRecipe(@RequestBody Recipe recipe, @PathVariable Long id) throws Exception {

        Recipe updatedRecipe = recipeService.updateRecipe(recipe, id);
        return updatedRecipe;
    }
    @PutMapping("/{id}/like")
    public Recipe likeRecipe(@RequestHeader("Authorization")String jwt,
                             @PathVariable Long id) throws Exception {
        User user = userService.findUserByJwt(jwt);
        Recipe updatedRecipe = recipeService.likeRecipe(id, user);
        return updatedRecipe;
    }
}

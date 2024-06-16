package com.zosh.recipesharingyoutube.repository;

import com.zosh.recipesharingyoutube.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe,Long> {
}

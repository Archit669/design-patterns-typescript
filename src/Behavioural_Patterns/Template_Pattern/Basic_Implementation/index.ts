import { ChocolateCake, VanillaCake, CakeRecipe } from "./cakeRecipe";

function bake(recipe: CakeRecipe){
    return recipe.bakeCake();
}

bake(new ChocolateCake());
bake(new VanillaCake());
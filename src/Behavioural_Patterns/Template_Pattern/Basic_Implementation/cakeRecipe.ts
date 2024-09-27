export abstract class CakeRecipe{
    public bakeCake(){
        this.preheatOven();
        this.bake();
        this.coolDown();
        this.decorate();
    }

    protected preheatOven(){
        console.log("pre heat in oven")
    }

    protected bake(){
        console.log("bake in oven");
    }

    protected coolDown(){
        console.log("cooldown in oven");
    }

    protected decorate(){
        console.log("decorate the cake");
    }

    private maxIngredients(){
        console.log("mix the ingredients");
    }
}

export class ChocolateCake extends CakeRecipe{
    protected decorate(): void {
        console.log("chocolate cake is decorated");
    }
}

export class VanillaCake extends CakeRecipe{
    protected decorate(): void {
        console.log("vanilla cake is decorated");
    }
}
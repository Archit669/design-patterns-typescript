import { FilterStrategy } from "./filterStrategy";

export class ImageProcessor{
    private strategy: FilterStrategy;

    constructor(strategy: FilterStrategy){
        this.strategy = strategy;
    }

    setFilterStrategy(strategy: FilterStrategy): void{
        this.strategy = strategy;
    }

    applyFilter(image:string):void{
        this.strategy.apply(image);
    }
}
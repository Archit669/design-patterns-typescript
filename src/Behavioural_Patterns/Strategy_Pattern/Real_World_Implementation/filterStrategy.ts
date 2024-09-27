export interface FilterStrategy{
    apply(image:string):void;
}

export class GrayscaleStrategy implements FilterStrategy{
    apply(image: string): void {
        console.log(`${image} has now grayscale  strategy`);
    }
}

export class SepiaStrategy implements FilterStrategy{
    apply(image: string): void {
        console.log(`${image} has now sepia  strategy`);
    }
}


export class NegativeStrategy implements FilterStrategy{
    apply(image: string): void {
        console.log(`${image} has now negative strategy`);
    }
}
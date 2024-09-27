interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  properties: ShapeProperties;
  constructor(properties: ShapeProperties) {
    this.properties = properties;
  }
  abstract clone(): Shape;
}

class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(properties: ShapeProperties, width: number, height: number) {
    super(properties);
    this.width = width;
    this.height = height;
  }

  clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };
    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

// Concrete class Circle extending Shape
class Circle extends Shape {
  public radius: number;

  constructor(properties: ShapeProperties, radius: number) {
    super(properties);
    this.radius = radius;
  }

  clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Circle(clonedProperties, this.radius);
  }
}

// Create a red rectangle
let redRectangle: Shape = new Rectangle({ color: "red", x: 0, y: 0 }, 10, 20);

// Clone the red rectangle
let anotherRedRectangle: Shape = redRectangle.clone();

// Change the color of the clone to blue
anotherRedRectangle.properties.color = "blue";

console.log(redRectangle);
// Outputs: Rectangle { properties: { color: 'red', x: 0, y: 0 }, width: 10, height: 20 }
console.log(anotherRedRectangle);
// Outputs: Rectangle { properties: { color: 'blue', x: 0, y: 0 }, width: 10, height: 20 }

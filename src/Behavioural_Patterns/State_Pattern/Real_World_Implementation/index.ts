interface Tool{
    onMouseDown():void;
    onMouseUp():void;
}

class Canvas{
    private tool: Tool;

    constructor(tool:Tool){
        this.tool = tool;
    }

    setTool(tool:Tool){
        this.tool = tool;
    }

    onMouseDown():void{
        this.tool.onMouseDown();
    }

    onMouseUp():void{
        this.tool.onMouseUp();
    }
}


class SelectionTool implements Tool{
    onMouseDown(): void {
        console.log("selection tool on mouse down");
    }

    onMouseUp(): void {
        console.log("selection tool on mouse up");
    }
}

class BrushTool implements Tool{
    onMouseDown(): void {
        console.log("Brushtool on mouse down");
    }

    onMouseUp(): void {
        console.log("BrushTool on mouse up");
    }
}

class EraserTool implements Tool{
    onMouseDown(): void {
        console.log("erase tool on mouse down");
    }

    onMouseUp(): void {
        console.log("eraser tool on mouse up");
    }
}

// Usage
let canvas = new Canvas(new SelectionTool());
canvas.onMouseDown(); // Selection rectangle started.
canvas.onMouseUp(); // Selection rectangle drawn.

canvas.setTool(new BrushTool());
canvas.onMouseDown(); // Brush stroke started.
canvas.onMouseUp(); // Brush stroke drawn.

canvas.setTool(new EraserTool());
canvas.onMouseDown(); // Eraser started.
canvas.onMouseUp(); // Erased



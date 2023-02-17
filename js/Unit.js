class Unit{
    constructor(posX, posY){
        this.x = posX;
        this.y = posY;
        this.layers = [];
        this.layers.push(baseLayers[floor(random(baseLayers.length))].init());
        this.layers.push(middleLayers[floor(random(middleLayers.length))].init());
        this.layers.push(topLayers[floor(random(topLayers.length))].init());
    }

    render(){
        push();
        translate(this.x, this.y);
        this.layers.forEach(layer => layer.render());
        pop();

    }
}
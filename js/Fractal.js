class Fractal{
    constructor(n,diam){
        this.num_points = 360;
        this.diam = diam;
        this.theta = 360 / 2;
        this.n = n;
        this.render();
    }
    render()
    {
        push();
        translate(width / 2, height / 2);
        beginShape();
        for(let i = 0; i <= this.num_points; i++)
        {
            let shape = i * this.num_points/this.n;
            let x = cos(shape) * this.diam;
            let y = sin(shape) * this.diam;
            rotate(this.theta);
            vertex(x,y);
        }
        strokeWeight(random(10));
        stroke(getRandomColour());   
    
    endShape();
    pop();

    if(this.diam < 5)
        return;
    else
        new Fractal(this.n * 0.8, this.diam * 0.8);
    }
}
class Layer
{
    constructor() 
    {
        this.sides = SIDES;
        this.num_shapes = this.sides;
        this.theta = 360 / this.num_shapes;
        this.all_steps = 8;
        this.single_step = (UNIT_SIZE / 2)  / this.all_steps;
        this.thin_stroke = 1;
        this.thick_stroke = 3;
        this.layer_col = getRandomColour();
    }

}

class Circles extends Layer {
    constructor(){
        super();
        this.shape_size = (UNIT_SIZE / 2) * 0.93;
        this.pos = (UNIT_SIZE / 2) - (this.shape_size / 2);
    }

    render() {
        noFill();
        stroke(this.layer_col);
        strokeWeight(1);
        
        push();
        for( let i = 0; i <= this.num_shapes; i++)
        {
          ellipse(this.pos, 0, this.shape_size, this.shape_size);
          rotate(this.theta);
        }
        pop();
    }
}


class SimpleLines extends Layer {
    constructor(){
        super();
        this.num_steps = randomSelectTwo() ? this.all_steps : int(this.all_steps * 1.25);
        this.step = (UNIT_SIZE / 2) / this.num_steps;
        this.start = floor(random(0, this.num_steps));
        this.stop = floor(random(this.start, this.num_steps + 1));
        this.num_shapes = randomSelectTwo() ? this.sides : this.sides * 2;
        this.weight = randomSelectTwo() ? this.thin_stroke
         : this.thick_stroke;
        this.theta = 360 /  this.num_shapes;
    }

    render()
    {

        noFill();
        stroke(this.layer_col);
        strokeWeight(this.weight);
      
        push();
          //translate(width / 2, height / 2);
      
          for ( let i = 0; i < this.num_shapes; i++)
          {
            line(this.start * this.step ,0,this.stop * this.step,0);
            rotate(this.theta);
          }
        pop();
    }
}


class OutlineShape extends Layer{
    constructor(){
        super();
        
        this.is_hexagon = randomSelectTwo();
        this.weight = randomSelectTwo() ? this.thin_stroke
         : this.thick_stroke;

        
    }

    render(){
        noFill();
        stroke(this.layer_col);
        strokeWeight(this.weight);
        push();
        //translate(width / 2, height / 2 );
        if(this.is_hexagon)
        {
          hexagon(0,0, UNIT_SIZE / 2);
        }
        else
        {
          ellipse(0,0,UNIT_SIZE,UNIT_SIZE);
        }
      
        pop();
    }
}


class TestLines extends Layer{
    constructor(){
        super();
        this.num_shapes = randomSelectTwo() ? this.sides : this.sides * 2;
        this.layer_col = getRandomColour();
        
    }

    render()
    {
        stroke(PALETTE[0]);
        push();
          //translate(width / 2, height / 2);
      
          ellipse(0,0,UNIT_SIZE,UNIT_SIZE);
          stroke(this.layer_col);
          const theta = 360 /  this.num_shapes;
          for ( let i = 0; i < this.num_shapes; i++)
          {
            line(0,0,UNIT_SIZE / 2,0);
            rotate(this.theta);
          }
        pop();
    }
}

class DotedLines extends Layer{
  constructor(){
    super();
    this.num_shapes = randomSelectTwo() ? this.sides : this.sides * 2;
    this.layer_col = getRandomColour();
    this.theta = 360 /  this.num_shapes;
    this.shape_size = 10;
    this.empty_center = this.single_step;

  }

  render(){
    fill(this.layer_col);
    noStroke();
    push();
    for ( let i = 0; i < this.num_shapes; i++)
    {
      for ( let x = this.empty_center; x < UNIT_SIZE / 2; x+=this.single_step)
      {

        rect(x,0,this.shape_size,this.shape_size);
      
      }
      rotate(this.theta);
    }
  pop();
  }
}

class CenteredShape extends Layer {
  constructor(){
      super();
      this.shape_bias = random();
      this.shape_size = floor(random(this.all_steps / 2 , this.all_steps - 2)) * this.single_step;
  }

  render() {
      fill(this.layer_col);
      fill(255,0,0,0.9);
      noStroke();  
      push();
    if(this.shape_bias < 0.33)
    {
      rect(0, 0, this.shape_size, this.shape_size);
 
    }
   else if(this.shape_bias > 0.33 && this.shape_bias < 0.6)
    {
      rect(0, 0, this.shape_size, this.shape_size);

    }
    else if(this.shape_bias > 0.6)
    {
      hexagon(0, 0, this.shape_size);
      rotate(this.theta / 2);
    }
      pop();
  }
}


class RingOfShapes extends Layer{
  constructor(){
    super();
    this.steps = floor(random(1,this.all_steps));
    this.center = this.steps * this.single_step;
    this.shape_bias = random();
    this.direction = randomSelectTwo();
    this.fill_col = randomSelectTwo() ? this.layer_col : color(0, 1);
    this.weight = randomSelectTwo() ? this.thin_stroke
    : this.thick_stroke;

    if(this.steps < this.all_steps / 2){
      this.radius = floor(random(1, this.steps)) * this.single_step;
    }else if(this.steps > this.all_steps / 2)
    {
      this.radius = floor(random(1, this.all_steps - this.steps)) * this.single_step
    }else{
      this.radius = floor(random(1, (this.all_steps /2) + 1)) * this.single_step;
    }

  }

  render(){
    stroke(this.layer_col);
    fill(this.fill_col);
    strokeWeight(this.weight);
    push();
    for(let i = 0; i < this.num_shapes; i++)
    {
      if(this.shape_bias < 0.33){
        ellipse(0, this.center, this.radius);
      }else if(this.shape_bias > 0.33 && this.shape_bias < 0.66){
        rect(0, this.center, this.radius);
      }else if(this.shape_bias > 0.6){
        trithetas(this.center, this.radius, this.direction);
      }
      rotate(this.theta);
    }
    pop();
  }
}

class SteppedHexagon extends Layer{
  constructor(){
    super();
    this.num_steps = randomSelectTwo() ? this.all_steps : this.all_steps * 1.25;
    this.empty_center = UNIT_SIZE / 2 * 0.15;
    this.single_step = ((UNIT_SIZE / 2) - this.empty_center) / this.num_steps;
    this.weight = randomSelectTwo() ? this.thin_stroke
    : this.thick_stroke;
  }

  render() {
    stroke(this.layer_col);
    noFill();
    strokeWeight(this.weight);
    push();
    rotate(this.theta / 2);
    for(let i = 1; i < this.num_steps; i++)
    {
      hexagon(0, 0, this.empty_center + (i * this.single_step));
    }
    pop();
  }
}
///////////////////////////////HEXAGON DRAWING //////////////////////////////////
function hexagon(x,y,r)
{
  const theta = 360 / 6;
  beginShape();
  for(let i = 0; i < 6; i++)
  {
    const currVertex = pointOnCircle(x,y,r,i * theta);
    vertex(currVertex.x, currVertex.y);
  }
  endShape(CLOSE);
}
///////////////////////////////HELPER TO DRAW HEXAGON //////////////////////////////////
function pointOnCircle(x,y,r,theta)
{
  const posX = x + r * cos(theta);
  const posY = y + r * sin(theta);
  return createVector(posX, posY);
}


///////////////////////////////RANDOM DECISION //////////////////////////////////
function randomSelectTwo ()
{
  const result = random() > .5 ? true : false;
  return result;
}
///////////////////////////////RANDOM COLOR FROM PALETTE //////////////////////////////////
function getRandomColour()
{
  const randIndex = floor(random(0, PALETTE.length));
  return PALETTE[randIndex];
}


///////////////////////////////TEMPLATE //////////////////////////////////
function testLines()
{

  let num_shapes = randomSelectTwo() ? SIDES : SIDES * 2;
  const stroke_col = getRandomColour();

  stroke(PALETTE[0]);
  push();
    translate(width / 2, height / 2);

    ellipse(0,0,UNIT_SIZE,UNIT_SIZE);
    stroke(stroke_col);
    const theta = 360 /  num_shapes;
    for ( let i = 0; i < num_shapes; i++)
    {
      line(0,0,UNIT_SIZE / 2,0);
      rotate(theta);
    }
  pop();
}

function trithetas(center, radius, direction)
{
  if(direction){
    beginShape();
    vertex(center + radius * cos(0), radius * sin(0));
    vertex(center + radius * cos(120), radius * sin(120));
    vertex(center + radius * cos(240), radius * sin(240));
    endShape(CLOSE);
  }
    else{
      beginShape();
      vertex(center + radius * cos(180), radius * sin(180));
      vertex(center + radius * cos(300), radius * sin(300));
      vertex(center + radius * cos(60), radius * sin(60));
      endShape(CLOSE);
    }
}

const baseLayers = [
  {
    name: 'Circles',
    bias: 0.5,
    init: () => new Circles()
  },
  {
    name: 'Stepped hexagon',
    bias: 0.5,
    init: () => new SteppedHexagon()
  }
]

const middleLayers = [
  {
    name: 'Centered Shape',
    bias: 0.5,
    init: () => new CenteredShape()
  },
  {
    name: 'Outline shapes',
    bias: 0.5,
    init: () => new OutlineShape()
  }
]

const topLayers = [
  {
    name: 'Doted lines',
    bias: 0.3,
    init: () => new DotedLines()
  },
  {
    name: 'Ring of shapes',
    bias: 0.6,
    init: () => new RingOfShapes()
  },
  {
    name: 'Simple lines',
    bias: 0.9,
    init: () => new SimpleLines()
  },
]

function generate()
{
  clear();
  // background("#333138");
  let unit = new Unit(width / 2 ,height / 2);
  let fractal = new Fractal(floor(random(3,16)),UNIT_SIZE/2);
  unit.render();
  if(document.getElementById("save").style.visibility = "hidden")
  {
    document.getElementById("save").style.visibility = "visible";
  }
}

    

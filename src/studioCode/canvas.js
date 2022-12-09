import { fabric } from "fabric";
export function setupCanvas(canvasEl) {
  let mousePressed ;
  const canvas = new fabric.Canvas(canvasEl);
  canvas.setWidth(window.innerWidth);
  canvas.setHeight(window.innerHeight - 40);
  canvas.setBackgroundColor("white")
  canvas.on('mouse:move' , (event)=>{
    if(mousePressed){
      canvas.setCursor('grab')
      canvas.selection = false
      canvas.relativePan(new fabric.Point(event.e.movementX , event.e.movementY))
    }
  })
  canvas.on('mouse:down' , ()=>{
    mousePressed = true
  }) 
  canvas.on('mouse:up' , ()=>{
    mousePressed = false
  })
  const rect = new fabric.Rect({
    top: 200,
    left: window.innerWidth / 2 - 50,
    width: 100,
    height: 100,
    fill: "#ea4334",
  });

  const circle = new fabric.Circle({
    radius: 50,
    fill: "#ea4334",
    left: window.innerWidth / 2 - 100,
    top: 200,
  });

  const circle2 = new fabric.Circle({
    radius: 50,
    fill: "#ea4334",
    left: window.innerWidth / 2 - 50,
    top: 150,
  });
  const heart = new fabric.Group([rect, circle, circle2], {
    angle: 45,
  });

  canvas.add(heart);
}


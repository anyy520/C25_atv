// 1
class Ground 
{
  // 3
  constructor(x, y, w, h) 
  {
    // 4
    let options = {
    // solo permaneça parado.

      isStatic:true
    };
    // ajustar o mecanismo de física.e (4 options
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
// 5


 
// 6
  
  
}

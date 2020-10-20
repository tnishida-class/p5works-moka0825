// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 1){
        if(j % 2 == 1){
          fill(255);
          }
        else{
          fill(196);
        }
    }
      if(i % 2 == 0){
        if(j % 2 == 1){
          fill(196);
          }
          else{
            fill(255);
          }
    }

      console.log(i, j);
      rect(size * i, size * j, size, size);

      for(let i = 0; i < 3; i++){
        for(let j = 0; j < 8; j ++){
          console.log(i, j);
          ellipse(2*size*i+b, size*j+12.5);
          b=(j % 2 == 1 ? 12.5 : 12.5+25)
          fill(255, 0, 0)
        }
      }

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}

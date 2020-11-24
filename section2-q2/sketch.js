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
      rect(25 * i, 25 * j, 25, 25);

      fill(255, 0, 0);
      for(let i = 0; i < 8; i++){
        for(let j = 0; j < 3; j++){

        b=(j % 2 == 1 ? 12.5 : 12.5+25)
        ellipse(2*25*i+b, 25*j+12.5, 22);

        }
      }
      fill(0);
      for(let i = 0; i < 8; i++){
        for(let j = 5; j < 8; j++){

        b=(j % 2 == 1 ? 12.5 : 12.5+25)
        ellipse(2*25*i+b, 25*j+12.5, 22);
        }
      }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}

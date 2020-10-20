// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
          if(i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1){
        fill(255);

      }
          else{
        fill(196);
      }

      console.log(i, j);
       rect(10 * i, 10 * j, 10, 10);

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}

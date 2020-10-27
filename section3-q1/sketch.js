// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  regularPolygon(3, 130, 16, 20);
  balloon("I love keyakizaka46", 30, 40);

}


function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(0);
  rect(0, 0, w + p * 10, h + p * 10);
  fill(255);
  text(t, p, h + p);
}

function regularPolygon(n, cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i / n - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    fill(0);
    vertex(x,y);
  }

  endShape(CLOSE);
  }

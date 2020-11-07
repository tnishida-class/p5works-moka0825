// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love Kobe");

}


function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 50;
  let r = 10;

  fill(0);
  rect(r,r, w + p * 2, h + p * 2);
  fill(255);
  textSize(20);
  textFont("gothic");
  text(t, p * 0.5 + r, h + p + r * 0.5);


  fill(0);
  triangle((w + p * 2)* 0.6, h + p * 2 + r,
  (w + p * 2)* 0.9, h + p * 2 + r,
  (w + p * 2)* 1, (h + p * 2 + r)* 1.3);

  endShape(CLOSE);
  }

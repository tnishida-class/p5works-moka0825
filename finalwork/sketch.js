// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


  myTable = new Array("日","月","火","水","木","金","土");
  myDay = new Date();

  myYear = myDay.getFullYear();
  myMonth = myDay.getMonth() + 1;
  myDate = myDay.getDate();
  myDay = myDay.getDay();

  Message1 = myYear + "年" + myMonth + "月" + myDate + "日";
  Message2 = myTable[myDay] + "曜日\n\n";
  Message3 = "プログラミング基礎演習 最終課題\n";
  Message = Message1 + " " + Message2;
  document.write(Message);
  document.write(Message3.fontcolor("orange"));


function CountDown(Year, Month, Day){
     Now = new Date();
     RunDate = new Date(Year, Month-1, Day);
     Msec = Now.getTime() - RunDate.getTime();
     DayCount = Math.floor(Msec / (1000 * 60 * 60 * 24) );
     return DayCount;
}


Day = CountDown(2020, 11, 24);
    if (Day < 0) document.write("\n締め切りまで、あと", Day*(-1), "日です");

    else if (Day == 0) document.write( "\n本日は 締め切りです！" );

    else document.write("\n締め切りから".fontcolor("red"), Day, "日が経過しました". fontcolor("red"));
    

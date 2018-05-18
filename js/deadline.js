weeks = new Array("日", "月", "火", "水", "木", "金", "土");

function currentDateAndTime(){
  currentDate = new Date();
  msg = "現在時刻："
  msg += currentDate.getFullYear() + "年";
  msg += (currentDate.getMonth()+1) + "月";
  msg += currentDate.getDate() + "日";
  msg += "(" + weeks[currentDate.getDay()] + ")";
  msg += currentDate.getHours() + "時";
  msg += currentDate.getMinutes() + "分";
  msg += currentDate.getSeconds() +"秒";
  document.getElementById("currentDateView").innerHTML = msg;
}

function deadlineCountDown(){
  now = new Date();
  deadlineYear　= 2018;
  deadlineMonth = 8;
  deadlineDate = 31;
  runDate = new Date(deadlineYear, deadlineMonth-1, deadlineDate);
  msec = runDate.getTime() - now.getTime();
  dayLeft = Math.floor(msec / (1000*60*60*24));
  var msg;
  if(dayLeft > 0)
    msg = "締切まであと" + dayLeft + "日";
  else if (dayLeft == 0)
    msg = "本日は締切日です。";
  else
    msg = "締切日から" + dayLeft*(-1) + "日経過しています。"
  document.getElementById("deadlineView").innerHTML = msg;
}


setInterval('currentDateAndTime()', 1000);
setInterval('deadlineCountDown()', 1000);
var weeks = new Array("日", "月", "火", "水", "木", "金", "土"), deadline = new Array(2018, 8, 31), runDate = new Date(deadline[0], deadline[1]-1, deadline[2]), msg, currentDate, msec, dayLeft;

function deadlineCountDown(){
  
  currentDate = new Date();
  msg = "現在時刻：";
  msg += currentDate.getFullYear() + "年";
  msg += (currentDate.getMonth()+1) + "月";
  msg += currentDate.getDate() + "日";
  msg += "(" + weeks[currentDate.getDay()] + ")";
  msg += currentDate.getHours() + "時";
  msg += currentDate.getMinutes() + "分";
  msg += currentDate.getSeconds() +"秒";
  document.getElementById("currentDateView").innerHTML = msg;
  
  msec = runDate.getTime() - currentDate.getTime();
  dayLeft = Math.floor(msec / (1000*60*60*24));
  if(dayLeft > 0)
    msg = "入稿締切まであと" + dayLeft + "日";
  else if (dayLeft == 0)
    msg = "本日は入稿締切日です。";
  else
    msg = "締切日から" + dayLeft*(-1) + "日経過しています。"
  document.getElementById("deadlineView").innerHTML = msg;
}

setInterval('deadlineCountDown()', 1000);
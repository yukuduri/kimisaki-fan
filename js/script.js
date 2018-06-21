//外部サイトにジャンプする
function jump(URL){
  window.open(URL);
}

//サイト内移動をする
function move(fileName){
  location.href = fileName;
}

function footer(option){
  var html="";
  if(option==null){
    html = '<p>©2018 kimisaki-fan.net</p>';
  }else if(option=='新ガル') {
    html = '<p>当ページは、Happy Elements株式会社「あんさんぶるガールズ！！」の画像を利用しております。<br>該当画像の転載・配布等は禁止しております。<br>©Happy Elements K.K<br><br><br>©2018 kimisaki-fan.net</p>';
  }else if(option=='旧ガル'){
    html = '<p>当ページは、Happy Elements株式会社「あんさんぶるガールズ！」の画像を利用しております。<br>該当画像の転載・配布等は禁止しております。<br>©Happy Elements K.K<br><br><br>©2018 kimisaki-fan.net</p>';
  }else if(option=='新旧ガル'){
    html = '<p>当ページは、Happy Elements株式会社「あんさんぶるガールズ！」「あんさんぶるガールズ！！」の画像を利用しております。<br>該当画像の転載・配布等は禁止しております。<br>©Happy Elements K.K<br><br><br>©2018 kimisaki-fan.net</p>';
  }else if(option=='last-update'){
    html = '<p>last-update：'+document.lastModified+'<br><br>©2018 kimisaki-fan.net</p>';
  }
  document.write(html);
}
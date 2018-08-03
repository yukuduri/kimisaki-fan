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

function reBuild(key){
  var countOfContents = 1;
  if (key==null){
    $('.item').show();
  }else{
    key = '.item-'+key;
    $('.item-m').hide();
    var contents = [".item-web", ".item-game", ".item-illust", ".item-other", ".item-unei"];
    contents.forEach(function(value){
      if(key==value){
        $(key).show();
      }else{
        $(value).hide();
      }
    });
    $('.item-register').show();
    countOfContents = $("section"+key).length;
  }
  
  var replaceWords = "<p class=\"description\">  当サイトは、Happy Elements株式会社「あんさんぶるガールズ」の二次創作を応援しています。<br>  webサイトからイラスト、ゲーム、コスプレまでジャンルを問いません。二次創作活動をしている方のTwitterやwebサイト、またはその作品へのリンクを貼らせて頂きます。<br>詳細はこちらをクリック。</p>";
  if(countOfContents==0){
    replaceWords = "<p class=\"description\">このコンテンツは未登録です。ここをクリックして登録してください！<p>"
  }
  $(".item-register .description").replaceWith(replaceWords);
  
  new Masonry('body', {
    itemSelector: '.item',
    columnWidth: 180,
    gutter: 4
  });
}
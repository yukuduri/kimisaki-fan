//外部サイトにジャンプする
function jump(URL){
  if( confirm("外部サイトを開こうとしています。よろしいですか？リンク先：" + URL) == true){
    window.open(URL);
  }
}

//サイト内移動をする
function move(fileName){
  location.href = fileName;
}
//外部サイトにジャンプする
function jump(URL){
  if(URL.indexOf("https://docs.google.com/forms/")==0){
    if( confirm("Googleフォームを開こうとしています。よろしいですか？") == true){
      window.open(URL);
    }
  }else if( confirm("外部サイトを開こうとしています。よろしいですか？リンク先：" + URL) == true){
    window.open(URL);
  }
  
}

//サイト内移動をする
function move(fileName){
  location.href = fileName;
}
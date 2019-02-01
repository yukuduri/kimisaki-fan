const commma = new Intl.NumberFormat('ja-JP');

var student1=['高原ちあき','小野ちよ','藍乃あいか','桃智あすか','早川きこ','三善かなえ','北川ゆき','長町やえ','木之下ゆゆ','丸子みさき','月永るか','氷野くるみ','神樹いちか','花音ことり','羽森つばさ','猫塚みけ','小鳩あずさ','大虎いさみ','鯱いかり','熊沢ひめの','雉子すみれ','藤猪しずく','鶯木こはる'];

var student2=['三波なつみ','長居ゆう','星海こよい','八朔つゆり','春風なな','堀田さあや','夏野ゆり','安条まい','龍泉寺レンレン','夢路まりあ','遠見ちか','梅園かな','柊るな','桐島かいり','砂賀みどり','悠木ともこ','夜霧はやて','笹芽ひよの','クー・カロア','榊むつみ','冴木もも'];

var student3=['鶴海ひまり','円成寺れいか','四方みつる','双葉みづき','双葉みなづき','小松ぼたん','山條ぎん','湖南やこ','御影かすみ','八壁ひかる','花丘まり','久坂あやめ','伊藤さくら','瀬川かえで','黒森すず','水嶌うしお','天宮るり','岩戸サン','棗ひびき','時国そら','峰山しおん','神無月ほとり','八雲ちづる','深鳥ふみ','日滝ましろ','神樹はじめ','曽根セイラ'];

var studentALL=student1.concat(student2,student3);

cafe19w ={コースター:600, アクリルチャーム:1600, アクキー:500, 缶バッジ:300};


$(function(){
  //イベント切替時自動実行
  $("select[name='event']").change(function(){
    event = $(this).val();
    if(event == 'cafe19w'){
      $("#selectItemArea").html('<br><p class=\"discliption\">欲しいアイテムを選択</p><select name=\"itemName\"><option value=\"コースター\">コースター</option><option value=\"アクリルチャーム\">アクリルチャーム</option><option value=\"アクキー\">アクキー</option><option value=\"缶バッジ\">缶バッジ</option></select>');
      $("select[name='gatya_option'] option[value='time10']").remove();
      $("select[name='gatya_option'] option[value='time1']").after($("<option>").val("time10").text("10回引く(チャームは5連)"));
    }else{
      alert("ガチャは選択必須です");
      $("#selectItemArea").html('');
      $("#selectCharaArea").html('');
      $("select[name='gatya_option'] option[value='time10']").remove();
      $("select[name='gatya_option'] option[value='time1']").after($("<option>").val("time10").text("10回引く"));
      $("select[name='year']").val('NULL');
      $("select[name='gatya_option']").val('NULL');
    }
  });
  
  
  //学年切替時に自動実行
  $("select[name='year']").change(function(){
    year = $(this).val();
    try{
      $("select[name='charaName']").val('NULL');
    }catch(e){
      //console.log(e);
    }
    if (year=='NULL'){
      //alert("学年は選択必須です");
      $("#selectCharaArea").html('');
    }else{
      chara = '<br><p class=\"discliption\">欲しいキャラを選択</p><select name=\"charaName\"><option value=\"NULL\">--指定しない--</option>';
      if(year=='1'){
        student1.forEach(function(value){
          chara += '<option value=\"'+value+'\">'+value+'</option>';
        });
      } else if (year=='2') {
        student2.forEach(function(value){
          chara += '<option value=\"'+value+'\">'+value+'</option>';
        });  
      } else if (year=='3') {
        student3.forEach(function(value){
          chara += '<option value=\"'+value+'\">'+value+'</option>';
        });  
      }else{
        studentALL.forEach(function(value){
          chara += '<option value=\"'+value+'\">'+value+'</option>';
        });
      }
      chara += '</select>';
      $("#selectCharaArea").html(chara);
    }
  });
  
  //オプション切替時に自動実行
  $("select[name='gatya_option']").change(function(){
    //好きな数だけが選択されたとき
    if($(this).val()=='charaNUM'){
      $('#selectOptionArea').html('<br><p class=\"discliption\">欲しい数を入力<br>(半角数字1～1000)</p><input type=\"number\" name=\"numOfChara\" min=\"1\" max=\"1000\" value=\"1\">');
    }else{
      $('#selectOptionArea').html('');
    }
  });
});



function simulate() {
  
  //verNumber=($("h1[class='header']").text()).match(/v.*/);
  usr = $("input[name='usrName']").val();
  gatya_option = $("select[name='gatya_option']").val();
  event = $("select[name='event']").val();
  year = $("select[name='year']").val();
  try{
    //jQueryのval関数はエラーを返さずtry-catch文で例外処理できない
    //itemName = $("select[name='itemName']").val();
    itemName = document.simulator.itemName.options[document.simulator.itemName.selectedIndex].value;
    try{
      //jQueryのval関数は（ｒｙ
      //chara = $("select[name='charaName']").val();
      chara = document.simulator.charaName.options[document.simulator.charaName.selectedIndex].value;
      if(gatya_option!='NULL'){
        resultText = "【";
        if(usr!=''){
          usr = usr.replace(/[@＠]/g,'@ ');
          usr = usr.replace(/[‪#＃‬]/g,'♯');
          resultText+=usr+'さんの'
        }
        resultText+='ガチャ結果】';
        //var gatya_ary = new Array();
        
        if(year=='1'){
          gatya_ary=student1;
        } else if (year=='2') {
          gatya_ary=student2;
        } else if (year=='3') {
          gatya_ary=student3; 
        }else{
          gatya_ary=studentALL;
        }
        len = gatya_ary.length;
        if (event=='cafe19w') {
          if(gatya_option=="time1"){
            if(itemName=='アクリルチャーム'){
              resultText+=gatya_ary[Math.floor(Math.random() * len)]+'と';
            }
            resultText+=gatya_ary[Math.floor(Math.random() * len)]+'の'+itemName+'を引いた。'+commma.format(cafe19w[itemName])+'円かかった。';
          }else if(gatya_option=="time10"){
            if(itemName=='アクリルチャーム'){
              n=5;
            } else{
              n=10;
            }
            for (i=0; i<9; i++){
              resultText+=gatya_ary[Math.floor(Math.random() * len)]+',';
            }
            resultText+=gatya_ary[Math.floor(Math.random() * len)];
            resultText+='の'+itemName+'を引いた。'+commma.format(cafe19w[itemName]*n)+'円かかった。';
          }else if(gatya_option=='chara'){
            if(chara!='NULL'){
              gatya_MAX=1000;
              gatya_hazure=true;
              gatya_times=gatya_MAX;
              for(i=0;i<gatya_MAX;i++){
                gatya_chara=gatya_ary[Math.floor(Math.random() * len)];
                if(gatya_chara==chara){
                  gatya_hazure=false;
                  gatya_times=i+1;
                  break;
                }
              }        
              if(gatya_times==gatya_MAX && gatya_hazure){
                resultText+=commma.format(cafe19w[itemName]*gatya_MAX)+'円かけて'+gatya_MAX+'回引いたが、'+chara+'の'+itemName+'を引くことはできなかった。。。';
              }else{
                if(itemName=='アクリルチャーム'){
                  if(gatya_times%2==0){
                    gatya_times/=2;
                  }else{
                    gatya_times/=2;
                    gatya_times+=0.5;
                  }
                }
                resultText+=chara+'の'+itemName+'を引くのに'+gatya_times+'回かかった。'+commma.format(cafe19w[itemName]*gatya_times)+'円でした。';
              }
            }else{
              alert("このオプションを選択するにはキャラを指定してください。")
              resultText='';
            }
          }else if(gatya_option=='charaNUM'){
            if(chara!='NULL'){
              gatya_MAX=100000;
              gatya_hazure=true;
              gatya_atariMAX=$("input[name='numOfChara']").val();
              gatya_atariCount=0;
              gatya_times=gatya_MAX;
              for(i=0;i<gatya_MAX;i++){
                gatya_chara=gatya_ary[Math.floor(Math.random() * len)];
                if(gatya_chara==chara){
                  if(gatya_atariMAX== ++gatya_atariCount){
                    gatya_hazure=false;
                    gatya_times=i+1;
                    break;
                  }
                }
              }        
              if(gatya_times==gatya_MAX && gatya_hazure){
                if (gatya_atariCount==0){
                  resultText+=commma.format(cafe19w[itemName]*gatya_MAX)+'円かけて'+commma.format(gatya_MAX)+'回引いたが、'+chara+'の'+itemName+'を一つも引くことはできなかった。。。';
                }else{
                  resultText+=chara+'の'+itemName+'が'+gatya_atariMAX+'個欲しくて'+commma.format(cafe19w[itemName]*gatya_MAX)+'円かけて'+commma.format(gatya_MAX)+'回引き、'+commma.format(gatya_atariCount)+'個当てた。';
                }
              }else{
                if(itemName=='アクリルチャーム'){
                  if(gatya_times%2==0){
                    gatya_times/=2;
                  }else{
                    gatya_times/=2;
                    gatya_times+=0.5;
                  }
                }
                resultText+=chara+'の'+itemName+'を'+commma.format(gatya_atariMAX)+'個引くのに'+commma.format(gatya_times)+'回かかった。'+commma.format(cafe19w[itemName]*gatya_times)+'円でした。'; 
              }
            }else{
              alert("このオプションを選択するにはキャラを指定してください。")
              resultText='';
            }
          }else{
            alert("オプションは選択必須です");
            resultText='';
          }
        }else{
          alert("ガチャは選択必須です");
        }
        $("textarea[name='result_text']").val(resultText);
      }else{
        alert("オプションは選択必須です");
        $("textarea[name='result_text']").val('');
      }
    }catch(e){
      alert("ガチャ対象の学年を選択してください");
    }
  }catch(e){
     alert("ガチャは選択必須です");
  }
}


function copyText(){
  var result = document.getElementById('result');
  result.select();
  var succeeded = document.execCommand('copy');
  if (succeeded) {
    alert("クリップボードにコピーしました。");
  } else {
    alert("コピーに失敗しました。お手数ですが、ご自身でテキストボックス内を長押し等でコピーしてください。");
  }
}

function tweet(){
  result=document.result.result_text.value;
  url="http://twitter.com/share?text="+result+"%0a&hashtags=君咲ガチャシミュレータ&url=https://www.kimisaki-fan.net/gatya";
  window.open(url);
}
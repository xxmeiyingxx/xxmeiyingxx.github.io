// div#box1を取得する
var dom1 = document.getElementById("box1");
// アラートで確認してみる＆おまけで表示確認
// alert(dom);
// alert("こんにちは");
// コンソールのログを使って確認してみる
console.log(dom1);


// 取得したdom1にイベントと関数を紐づける
dom1.addEventListener("click", removeDiv);


// domを削除する関数の定義
function removeDiv() {
  // 動きを確認するためにアラート
  // alert("OK");
  // alert(this);
  var parent = this.parentNode;
  // alert(parent);
  parent.removeChild(this);
}

// div#box2
var dom2 = document.getElementById("box2");
dom2.addEventListener("click", removeDiv);

// div#box3
var dom3 = document.getElementById("box3");
dom3.addEventListener("click", removeDiv);



// ulを所得する
var ul = document.getElementsByTagName("ul");
ul = ul[0];
// console.log(ul);

// ulにイベントと関数を紐づける
ul.addEventListener("click", setClass);


// .hitを設定する関数
function setClass() {
  // alert(this);
  // alert(event.target);
  // console.log(this);
  // console.log(event.target);
  var li = event.target;

  li.classList.toggle("hit");
}

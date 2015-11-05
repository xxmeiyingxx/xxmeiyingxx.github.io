function addTask() {
  // テキストフィールドのDOMを所得
  // var tf = document.getElementById("task");
  var tf = $("#task");

  // DOMから入力された文字を取り出す
  var tt = tf.value;

  // div#listsのDOMを所得
  // var lst = document.getElementById("lists");
  var lst = $("lists");

  // <p>タグを作る
  var pt = document.createElement("p");

  // テキストノードを作って取り出した文字をセットする
  var tn = document.createTextNode(tt);

  // 作った<p>タグにテキストノードをアペンド
  pt.appendChild(tn);

  // div#listsのDOMに<p>タグをアペンド
  lst.appendChild(pt);


}

var lst = document.getElementById("lists");
lst.addEventListener("click", removeTask);

function removeTask() {
  var rm = event.target.parentNode;
  rm.removeChild(event.target);
}


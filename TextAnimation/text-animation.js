class TextAnimation {
  //constructorは値をを格納するスペース
  constructor(el){
    //これはただDOMというオブジェクトを作っただけ
    this.DOM = {};
    //this.DOM.elにはHTML要素を格納したいのでconstructorの引数でわたってきた値がHTML要素かどうか判定して、HTML要素ならそのまま使用、そうでなければquerySelectorで要素を取得する
    //elがインスタンスされたものかを判断する→instanceof
    //変数名 instanceof クラス名もしくはインターフェイス名
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    //HTML要素を取得したら次に要素の中身の文章のみ取り出す
    //trim()で空白を削除
    //split("")で文章の中身を全て分割して配列で返す。
    this.chars = this.DOM.el.innerHTML.trim().split("")
    this.DOM.el.innerHTML = this._splitText();
    console.log(this.DOM)
    console.log(this.chars)
    console.log(this.DOM.el.innerHTML);
  }
  //その値を操作する関数を以下に記述する

  //プライベートメソッド→中からしか呼ばないでくださいと言う意味
  //taという変数でインスタンス化した際にta._splitText()って記述しないでということ
  _splitText(){
    //reduce(callback,accの初期値)→今回はaccの初期値は""で無しにしている
    //reduceは配列を足し合わせたり、文字列として結合する時に使用する
    return this.chars .reduce((acc,curr) => {
      console.log(acc)
      //replaceは置換→空白があれば空白を付ける→空白を削除しないことを指示
      curr = curr.replace(/\s+/, '&nbsp;');
      //テンプレートリテラル``
      return `${acc}<span class="char">${curr}</span>`;
    },"");
  }
  //パブリックメソッド→外で呼び出してもOK！
  //taという変数でインスタンス化した際にta.animate()って記述してOKということ
  animate(){
    //classListはメソッドで、HTML要素の中のクラスタグにアクセスする
    this.DOM.el.classList.toggle('inview');
  }
}



//reduceメソッドはreturnの後に記述した内容が2回目のループ以降にaccuに渡ってくる


//コールバック関数について
//JavaScriptでは関数を変数として扱うことができる
const plus = function(a,b){
  return a + b;
}

function dosomething(a, b, callback){
  const result = callback(a,b);
  console.log(result);
}


dosomething(39,50,plus);

//コールバック関数で渡れる引数と元の関数の引数は同じでないといけない
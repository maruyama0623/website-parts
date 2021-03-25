//HTMLをJavaScriptから操作できるようにしたインターフェイス
//イメージ：HTML- DOM(インターフェイス：繋げる者) - JavaScript
//DOMはブラウザが実装していている


document.addEventListener('DOMContentLoaded',function(){
  //JavaScriptは最初にkeyとなるクラスを取得して変数に格納
  const els = document.querySelectorAll('.animate-title');
  //querySelectorAllはkeyとなる要素を配列で取得する
  //div.animate-titleを配列で取得している→div.animate-titleがエレメント(要素)である

  //InterSectionObserverのコールバック関数は交差した時の処理内容を記入する
  //InterSectionObserverのコールバック関数を無名関数で設定→無名関数のためconst ioより上に記入する
  //InterSectionObserverのコールバック関数は第1引数はio.observe()で設定した要素(div.animate-title)をIntersectionObserverEnteryというオブジェクトの中に入れて、すべての要素を再度配列として格納している。
  const cb = function(entries, observer){
    entries.forEach(entry => {
      //要素が交差すればtrue
      if(entry.isIntersecting){
        //entry.targetでdiv.animation-titleの要素を取得
        //TextAnimationのクラスは別のJSファイルに書き込んでいる※別のJSファイルはmain.jsより上に記入すること
        const ta = new TextAnimation(entry.target)
        ta.animate();
        //observeはIntersectionObserverと同じメソッドを持つらしい
        observer.unobserve(entry.target)
      }else{
      }
    })
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  }


  //IntersectionObserverはスクロールイベント監視するクラス
  const io = new IntersectionObserver(cb, options);
  //ターゲットが交差する度に第1引数であるコールバック関数が呼ばれる仕組み
  //第2引数がコールバックの制御する設定ができる

  //配列で取得したターゲット要素をバラバラにしてそれぞれを監視する
    els.forEach(el => io.observe(el));
    // io.observe(els);
  //IntersectionObserverを設定したオブジェクト名(io)のメソッドのobserveの引数に監視するターゲット要素を設定すると監視がスタートする→InterSectionObserverのコールバック関数のIntersectionObserverEntryというオブジェクトになる。→つまり,observeを設定しないとIntersectionObserverのコールバック関数は使えない
  //observe()の引数はエレメント（要素）でないといけない→つまり、elsのような配列はNG
  //arrow関数を使用している。この意味はelsの中に格納されている配列をバラバラにしてそれぞれをelというオブジェクトに分けて、その後それぞれのターゲット要素の監視をスタートしている。
})



//オブジェクトとして呼ばれるメソッドとコールバック内で呼ばれるメソッドはthisの取りうる値が違う
//オブジェクトで呼ばれるメソッドのthisはそのメソッドが格納しているオブジェクトがthisになる
//コールバックで呼ばれるメソッドはただの関数になるため、thisはメソッドが格納されているオブジェクトではない

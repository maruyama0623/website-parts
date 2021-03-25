document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('coverflow');
  //HeroSliderをインスタンス化する時に第一引数にエフェクトを指示すること ※Swiper effectで検索
  hero.start({
    delay:4000,//自動ページネーションするの間隔
    disableOnInteraction: false,//マウス操作後の自動ページネーション ※falseは止まらない
  });
  //
});



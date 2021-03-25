class HeroSlider {
  constructor(effect,el) {
    this.el = el;
    this.effect = effect;
    this.swiper = this. _initSwiper();
  }
  _initSwiper(){
    return this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      // direction: 'vertical',→コメントアウトで横方向に移動
      loop: true,
      grabCursor: true,
      effect: this.effect,
      centeredSlides: true,//中央揃え
      slidesPerView: 1,//表示する枚数
      speed:1000,//スライドからスライドに移動する移動時間
      breakpoints:{
        1024:{
          slidesPerView: 2,
        }
      }
    });
  } 
  start(options = {}){
    options = Object.assign({
      delay:4000,//4秒ごとにスライドが切り替わる
      disableOnInteraction: false//マウスが操作後もautoplayを続ける場合はfalse
    }, options);
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop(){
    this.swiper.autoplay.stop();
  }
}


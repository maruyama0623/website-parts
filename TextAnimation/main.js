document.addEventListener('DOMContentLoaded',function(){
  const cb = function (el,isIntersecting){
    if(isIntersecting){
      const ta = new TextAnimation(el);
      ta.animate();
    }
  }
  const observerFalse =  {
    root: null,
    rootMargin: "0px",
    threshold: 0,
    once: false
  };
  const so = new ScrollObserver('.animate-title',cb);
})
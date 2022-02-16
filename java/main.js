$(".dropdown").mouseover(function(){
    $(this).children(".dropdown-menu").css("display","block");
})
$(".dropdown").mouseout(function(){
    $(this).children(".dropdown-menu").css("display","none");
})

$(".dropdown-item").mouseover(function(){
    $(this).css({"background-color":"black","color":"#e4b34c"});
})
$(".dropdown-item").mouseout(function(){
    $(this).css({"background-color":"initial","color":"white"});
})




const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 7000,
    },
    effect: 'fade',
    fadeEffect: {
    crossFade: true
  },
});


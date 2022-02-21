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



$(".according").click(function(){
    $(this).next().slideToggle();
    this.classList.toggle("activee");
    
})



// $(".img-menu img").hover(function(){
//     $(this).next().fadeIn();
// })
// $(".img-menu img").mouseout(function(){
//     $(this).next().css({ opacity: 0 });
// })

// $(window).scroll(function(){
//     console.log($(window).scrollTop());
// })


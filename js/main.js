window.onload=function(){
    // 当前图片的index
    var num=0; 
    // 每一张图片显示的时间
    var delay=2000;
    // 有多少张图片
    var length=5;

    function playImage(n){ 
        // sibling返回所有同胞（兄弟）元素
    $('.container .pic-list li').removeClass('current').siblings().eq(n).addClass('current'); 
    $('.btn-list span').removeClass('current').siblings().eq(n).addClass('current');
 }
   
   function scrollPicPlay(){
       num++;
       if (num>=length) {
           num=0;
       }

       playImage(num);
   }

//    setInterval在delay过程中一直执行scrollPicPlay函数 两秒钟切换一张图片
   var stamp=setInterval(scrollPicPlay,delay);


   //4.1.鼠标悬浮 不轮播
   $('.container').on('mouseenter',function(){
       clearInterval(stamp);
   }).on("mouseleave",function(){
    //    鼠标离开继续轮播
       stamp=setInterval(scrollPicPlay,delay);
   }); 

//    $('.container').on('mouseenter', function(){
//         clearInterval(timeSpan); 
//     }).on('mouseleave', function(){ 
//             timeSpan = setInterval(scrollPicsPlay, delay) });
             //4.2给圆点按钮绑定事件 
             $('.btn-list span').on('click',function(){
              num=$(this).index();
              playImage(num);
            });
    // $('.btn-list span').on('click', function(){ num = $(this).index(); playImage(num); });
     //4.3.右边图片绑定事件 
     $('.slide-right').on('click',function(){
         num++;
         if (num>=length) {
             num=0;
        }
            playImage(num);
        });
    //  $('.slide-right').on('click', function(){ num++; if (num >= length) { num = 0; } playImage(num) });
      //4.4.左边图片绑定事件 
      $('.slide-left').on('click',function(){
          num--;
         if (num<0) {
             num=length-1;
         }
         playImage(num);
      });
    //   $('.slide-left').on('click', function(){ num --; if (num < 0) { num = length-1 } playImage(num) }); });

}
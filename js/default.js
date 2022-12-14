var typed6 = new Typed('.typography', {
   strings: ['','안녕하세요!<br/>신입 개발자 조현남입니다.&#128583;<br/> 사이트에 방문해 주셔서 감사합니다.	&#128077;'],
   typeSpeed: 20,
   loop: false
});

$(function(){

   var $container = $('#container');
   $(window).load(function(){
      $({percent : 60}).animate({percent : 0},{
         duration:2000,
         progress:function(){
            var now = this.percent;
            $container.css({paddingTop: now});
         }
      });
      // $container.delay(2000).animate({opacity:1},2000,'linear');
   });

   let $stackArea = $('#stack');
   let $stackBar = $stackArea.find('.bar');
   let $excuted = false;
   $(window).scroll(function(){
      $stackThreshold = $stackArea.offset().top - 900;
      if(!$excuted){
         if($(this).scrollTop() > $stackThreshold){
            $stackBar.each(function(){
               var $current = $(this);
               let $number = $current.attr('data-rate');
               $({rate:0}).animate({rate:$number},{
                  duration:4000,
                  progress:function(){
                     let $wid = this.rate;
                     $current.css({width:$wid+'%'});
                     $current.text(Math.ceil($wid)+'%');
                  }
               });
            });
            $excuted = true;
         }
      }
   });

   $('#FAQ .listTit').click(function(){
      $(this).next().slideToggle();
      $(this).parent().siblings().children('#FAQ .desc').slideUp();
      if($(this).parent().hasClass('active')){
         $(this).parent('li').removeClass('active');
      }else{
         $(this).parent('li').removeClass('active');
         $(this).parent('li').addClass('active');
      }
   });

   var $modalWrap = $('#modal_wrap').find('.modal_close'),
   $info_btn = $('#company_profile .profile_rel a'),
   $modalItem = $('.modal_pop');

   $info_btn.each(function(){
      $(this).click(function(e){
         e.preventDefault();
         $('#modal_wrap').addClass('active');
         var infoN = $(this).attr('data-num');
         active_modal(infoN);
      });
   });

   $modalWrap.click(function(){
      $('#modal_wrap').removeClass('active');
      $modalItem.removeClass('active');
   });

   function active_modal(e){
      $modalItem.each(function(){
         var $modalN = $(this).attr('data-num');
         if(e == $modalN){
            $modalItem.removeClass('active');
            $(this).addClass('active');
         }
      });
   }
});



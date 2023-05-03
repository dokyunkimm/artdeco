$(function(){
    //삳단 nav open close
    $('.jsNavOpen').on('click',function(){
       $(this).parents('.main_header').addClass('open');
       $('html, body').css('overflow','hidden');
       // $(this).css('z-index','20');
       // $('.jsNavClose').css('z-index', '30');
       $('.jsNavOpen').css('pointer-events','none');
       $('.jsNavClose').css('pointer-events', 'all');

   });
   $('.jsNavClose, .main_nav_dimmed').on('click',function(){
       $(this).parents('.main_header').removeClass('open');
       $('html, body').css('overflow','auto');
       // $(this).css('z-index','20');
       // $('.jsNavOpen').css('z-index', '30');
       $('.jsNavClose').css('pointer-events','none');
       $('.jsNavOpen').css('pointer-events', 'all');
   });
})
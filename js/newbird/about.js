$(function(){
    const sec02Fixed = $('.about_sec02_100');
    const sec03Fixed = $('.about_sec03_100');

    let winScrollTop = $(window).scrollTop();
    let winWidth = $(window).outerWidth();
    let winHeight = $(window).outerHeight();
    let aboutHeight = $('.about_wrap').outerHeight();
    let verticalWidth = $('.about_sec04').outerWidth();
    let transPx = aboutHeight- winHeight;
    let aboutFakeScroll = aboutHeight - winHeight + verticalWidth - winWidth;

    let flag = false;

    $('.jsAboutFakeScroll').css('height',aboutFakeScroll+'px');

    AnimateAbout();


    $(window).resize(function(){
        winScrollTop = $(window).scrollTop();
        winWidth = $(window).outerWidth();
        winHeight = $(window).outerHeight();

        aboutHeight = $('.about_wrap').outerHeight();
        verticalWidth = $('.about_sec04').outerWidth();
        transPx = aboutHeight- winHeight;
        aboutFakeScroll = aboutHeight + verticalWidth - winWidth;

        // //sec01
        // sec01Top = $('.about_sec01').offset().top;
        // sec01ImgTop  = $('.fold_img').offset().top; 
        // sec01ImgHeight = $('.fold_img').outerHeight();


        // //sec02 
        // sec02Height = $('.about_sec02').outerHeight();
        // sec02Top = $('.about_sec02').offset().top;
        // sec02Bottom = sec02Top + sec02Height - winHeight;
        // sec02TxtAniPer = (winScrollTop - sec02Top) / (sec02Height - winHeight);

        // sec02TxtAniRangeLTR = -100 - (-100 * sec02TxtAniPer); //-100% ~ 0
        // sec02TxtAniRangeRTL = 100 - (100 * sec02TxtAniPer); // 100 ~ 0


        // sec02BgPer = (winScrollTop - sec02Top - sec02Height + winHeight) / (winHeight);
        // sec02BgRangeWTB = 255 - ( 255 *  sec02BgPer); 
        // sec02BgRangeBTW = 0 + 255 *  sec02BgPer;//255 ~ 0


        $('.jsAboutFakeScroll').css('height',aboutFakeScroll+'px');
    });


    $(window).scroll(function(){
        AnimateAbout();
    });



    function AnimateAbout(){
        winScrollTop = $(window).scrollTop();
        winWidth = $(window).outerWidth();
        winHeight = $(window).outerHeight();

        aboutHeight = $('.about_wrap').outerHeight();
        verticalWidth = $('.about_sec04').outerWidth();
        transPx = aboutHeight- winHeight;
        aboutFakeScroll = aboutHeight + verticalWidth;

        //sec01
        sec01Top = $('.about_sec01').offset().top;
        sec01ImgTop  = $('.fold_img').offset().top; 
        sec01ImgHeight = $('.fold_img').outerHeight();


        //sec02 
        sec02Height = $('.about_sec02').outerHeight();
        sec02Top = $('.about_sec02').offset().top;
        sec02Bottom = sec02Top + sec02Height - winHeight;
        sec02TxtAniPer = (winScrollTop - sec02Top) / (sec02Height - winHeight);
        // (현재 스크롤 위치 - 현재 영역의 top값) / (스크롤영역 전체 width - 화면 높이)
        // 0 ~ 1 / 도달해야할 점
        sec02TxtAniPer2 = (winScrollTop - sec02Top + winHeight/2) / (sec02Height - winHeight);
       

        sec02TxtAniRangeLTR = -100 - (-100 * sec02TxtAniPer2);
        //-100% ~ 0
        sec02TxtAniRangeRTL = 100 - (100 * sec02TxtAniPer2);
        // 100 ~ 0


        sec02BgPer = (winScrollTop - sec02Top - sec02Height + winHeight) / (winHeight);
        // (현재 스크롤 위치 - 현재 영역의 top값 - 현재 영역의 높이 + 윈도우 높이) / 윈도우 높이
        // 이영역 끝지점 ~ 윈도우 높이만큼을 구하고 싶은것임.

        sec02BgRangeWTB = 255 - ( 255 *  sec02BgPer); 
        sec02BgRangeBTW = 0 + 255 *  sec02BgPer;
        //255 ~ 0



        //sec03 
        sec03Height = $('.about_sec03').outerHeight();
        sec03Top = $('.about_sec03').offset().top;
        sec03Bottom = sec03Top + sec03Height - winHeight;
        sec03Per = (winScrollTop - sec03Top) / (sec03Height - winHeight);


    
        $('.jsAboutFakeScroll').css('height',aboutFakeScroll+'px');
    

        // left to right animation
        if(winScrollTop > 0 && winScrollTop <= transPx ){
           $('.about_wrap').css('top', winScrollTop*-1 +'px').css('left',0);  
        } else if(winScrollTop > transPx ){
            $('.about_wrap').css('left', (winScrollTop - transPx)* -1 +'px').css('top', (transPx) * -1 );
        }


        // sec 01 애니메이션
        if(winScrollTop >= sec01Top && winScrollTop < sec01ImgTop + sec01ImgHeight){
            $('.fold_img').addClass('open');
        } else {
            $('.fold_img').removeClass('open');
        }


        // sec 02 애니메이션 
        // 01. 화면 고정
        if(winScrollTop >= sec02Top && winScrollTop <= sec02Bottom){
            sec02Fixed.removeClass('end').addClass('fixed').css('background-color','rgba(255,255,255)');

        } else if (winScrollTop >= sec02Bottom) {
            sec02Fixed.removeClass('fixed').addClass('end');
            
            //03. 백그라운드 컬러 및 텍스트 컬러 변경
            sec02Fixed.css('background-color','rgb('+sec02BgRangeWTB+','+sec02BgRangeWTB+','+sec02BgRangeWTB);
            $('.about_sec02 .slogan_box > .slogan_tit01, .about_sec02 .slogan_box > .slogan_tit02').css('color','rgb('+sec02BgRangeBTW+','+sec02BgRangeBTW+','+sec02BgRangeBTW);

            sec03Fixed.css('background-color','rgb('+sec02BgRangeWTB+','+sec02BgRangeWTB+','+sec02BgRangeWTB);
            $('.about_sec03_txt_box > .about_sec03_txt_right > p').css('color','rgb('+sec02BgRangeBTW+','+sec02BgRangeBTW+','+sec02BgRangeBTW);
        } else {
            sec02Fixed.removeClass('end').removeClass('fixed');

        } 

        //02. 텍스트 애니메이션
        if (winScrollTop > sec02Top-winHeight/2 && winScrollTop <= sec02Top + sec02Height - winHeight - winHeight/2) {
            $('.slogan_tit01').css('transform','translateX('+sec02TxtAniRangeLTR+'%)');
            $('.slogan_tit02').css('transform','translateX('+sec02TxtAniRangeRTL+'%)');
        } else {
            $('.slogan_tit01').css('transform','translateX(-100%)');
            $('.slogan_tit02').css('transform','translateX(100%)');
        }
        if (winScrollTop >= sec02Top + sec02Height - winHeight - winHeight/2) {
            $('.slogan_tit01').css('transform','translateX(0)');
            $('.slogan_tit02').css('transform','translateX(0)');
        }




       // sec 03 애니메이션 
        // 01. 화면 고정
        if(winScrollTop >= sec03Top && winScrollTop <=sec03Top+sec03Height-winHeight){
            sec03Fixed.removeClass('end').addClass('fixed');
        } else {
            sec03Fixed.removeClass('end').removeClass('fixed');
        }
        if(winScrollTop >= transPx) {
            sec03Fixed.addClass('end').removeClass('fixed');
        }
    }


    function numberCounting(obj, start, end, duration) {
        var range = end - start;
      
        var current = start;
        var increment = end > start ? 1 : -1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var timer = setInterval(function() {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }
      
    var transaction = 35; //도달 범위
      
    var countingTar = document.querySelector("#numAni");
      
    function AnimateCountiong() {
        duration = 800;
        numberCounting(countingTar, 0, transaction, duration);
    }

    AnimateCountiong();
});
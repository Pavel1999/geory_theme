$(document).ready(function () {
    svg4everybody({});

    //Показать скрыть
    $(".js-show-hidden").click(function(){
        if($(this).text() == 'Показать'){
            $(this).html('Скрыть');
        } else if($(this).text() == 'Скрыть') {
            $(this).html('Показать');
        }
        
        $('.block-show-hidden').slideToggle("slow");
    });

    $(window).resize(function() {

        if ($(window).width() <= 768) {
            $(".js-hidden-many").unbind('click')
            $('body').find('.block-hidden-many').css('display','none')
            $(".js-hidden-many").click(function(){
                $(this).next().slideToggle("slow");
            });
        } else {
            $(".js-hidden-many").unbind('click')
            $('body').find('.block-hidden-many').css('display','block')
        }
        
    });

    if ($(window).width() <= 768) {
        console.log('разрешение');
        $(".js-hidden-many").click(function(){
            $(this).next().slideToggle("slow");
        });
    } 
    
    //Слайдеры
    $('.js-banner').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows : false,
        
        dots: true,
        customPaging : function(slider, i) {
            return '<a href="javascript:void(0);" class="slick-dots__link" </a>';
        },
    });
    
    //Модальные окна
    $('.js-popup-link').magnificPopup({
        showCloseBtn: false
    });

    $(document).on('click', '.popup__close',
        function () {
            $.magnificPopup.close()
    });

    //Мобильное меню
    closeMenu = function(){
        $('.mobile-menu-block').animate({ //выбираем класс menu и метод animate
            left: '-285px' //при клике на крестик меню вернется назад в свое положение и скроется
        }, 200); //скорость движения меню в мс
        $('.mobile-nav__hamburger').removeClass('mobile-nav__hamburger_active');
    }

    $('.mobile-nav__hamburger').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('mobile-nav__hamburger_active');
        if($(this).hasClass("menu-open")){
            closeMenu();
            $(this).removeClass('menu-open')
        } else{
            $('.mobile-menu-block').animate({ //выбираем класс menu и метод animate
                left: '0px' //теперь при клике по иконке, меню, скрытое за левой границей на 285px, изменит свое положение на 0px и станет видимым
            }, 200); //скорость движения меню в мс
            $('.mobile-nav__hamburger').addClass('menu-open');
        }
        
    });
    /* Закрытие меню */
    $('.mobile-menu-block__close').click(function() { //выбираем класс icon-close и метод click
        closeMenu();
        $('.mobile-nav__hamburger').removeClass('menu-open');
    });

    //Скрол до начала
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    $('.scroll-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    

    
   

});
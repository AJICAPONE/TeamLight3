$(document).ready(function () {

    $(".modal").on('show.bs.modal', function() {
        setTimeout(function() {
            $(function () {
                var galleryTop2 = new Swiper('.popup-swiper', {
                    slidesPerView: 1,
                    // autoHeight: true,
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            // width: 990,
                            centeredSlides: true,
                            // centeredSlides: true,
                            // spaceBetween: 10,
                            // freeMode: true,


                        },
                        576: {
                            slidesPerView: 1,
                            // width: 990,
                            centeredSlides: true,



                        },
                    },
                });

                var galleryThumbs2 = new Swiper('.popup-swiper-horisontal', {
                    spaceBetween: 8,
                    height: 56,
                    width: 56,
                    // slidesPerView: 5,
                    touchRatio: 0.2,
                    slideToClickedSlide: true,
                    // direction: 'vertical',
                    mousewheel: true,
                    mousewheelControl: true,
                    parallax: true,
                    speed: 600,
                    navigation: {
                        nextEl: '.popup-swiper-count-photo',
                        // prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.thumb-count2',
                        type: 'fraction',
                        clickable: true,
                    },

                });
                galleryTop2.controller.control = galleryThumbs2;
                galleryThumbs2.controller.control = galleryTop2;
            });
        }, 500);
    });









    $(function () {
        var galleryTop = new Swiper('.gallery-top', {
            slidesPerView: 1,
            autoHeight: true,
            navigation: {
                nextEl: '.product-swiper-buttons-next',
                prevEl: '.product-swiper-buttons-prev',
            },
            breakpoints: {
                // 320: {
                //     slidesPerView: 1,
                //     // width: 990,
                //     centeredSlides: true,
                //     // centeredSlides: true,
                //     // spaceBetween: 10,
                //     // freeMode: true,
                //
                //
                // },
                // 576: {
                //     slidesPerView: 1,
                //     // width: 990,
                //     centeredSlides: true,
                //
                //
                //
                // },
                320: {
                    pagination: {
                        el: '.product-swiper-pag',
                        dynamicBullets: true,
                        clickable: true,
                    },
                    autoHeight: false,

                },
                576: {
                    pagination: {
                        el: '.product-swiper-pag',
                        dynamicBullets: true,
                        clickable: true,
                    },
                    autoHeight: false,

                },
                768: {
                    pagination: {
                        el: '.product-swiper-pag',
                        dynamicBullets: true,
                        clickable: true,
                    },
                    autoHeight: false,

                },

            },
        });

        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 13,
            height: 76,
            // slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true,
            direction: 'vertical',
            mousewheel: true,
            mousewheelControl: true,
            parallax: true,
            speed: 600,
            navigation: {
                nextEl: '.product-load-more-thumb-next',
                // prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.thumb-count',
                type: 'fraction',
                clickable: true,
                onSlideChangeEnd: function () {
                    $(".thumb-count").html(galleryThumbs.activeIndex)
                }

            },
            breakpoints: {
                // 320: {
                //     slidesPerView: 1,
                //     // width: 990,
                //     centeredSlides: true,
                //     // centeredSlides: true,
                //     // spaceBetween: 10,
                //     // freeMode: true,
                //
                //
                // },
                // 576: {
                //     slidesPerView: 1,
                //     // width: 990,
                //     centeredSlides: true,
                //
                //
                //
                // },
                768: {
                    slidesPerView: 1,
                    // width: 990,
                    // centeredSlides: true,
                    height: 76,
                    // width: 300,



                },
                992: {
                    slidesPerView: 1,
                    // width: 990,
                    height: 76,



                },
            },

        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
    });




    var swiper = new Swiper('.js-main-slider', {
        slidesPerView: 1,
        // slidesPerColumn: 1,
        pagination: {
            el: '.my-swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            nextEl: '.my-swiper-button-next',
            prevEl: '.my-swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                // width: 990,
                loop:true,
                centeredSlides: true,
                // centeredSlides: true,
                // spaceBetween: 10,
                // freeMode: true,


            },
            576: {
                slidesPerView: 1,
                // width: 990,
                loop:true,
                centeredSlides: true,
                // centeredSlides: true,
                spaceBetween: 10,
                width: 500,
                freeMode: true,


            },
            768: {
                slidesPerView: 1,
                // width: 990,
                loop:true,
                centeredSlides: true,
                // centeredSlides: true,
                spaceBetween: 10,
                width: 700,
                freeMode: true,


            },
            992: {
                slidesPerView: 1,
                // width: 990,


            },
        },
    });

    var swiper2 = new Swiper('.last-day-products-list', {
        slidesPerView: 5,
        navigation: {
            nextEl: '.last-day-prev',
            prevEl: '.last-day-next',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                width: 300,


            },
            576: {
                slidesPerView: 3,
                // width: 990,


            },
            768: {
                slidesPerView: 3,
                // width: 990,


            },
            992: {
                slidesPerView: 4,
                // width: 990,


            },
            1199: {
                slidesPerView: 5,
                // width: 990,


            },
        },

    });

    var swiper4 = new Swiper('.new-products-slider', {
        slidesPerView: 5,
        spaceBetween: 5,
        navigation: {
            nextEl: '.new-product-prev',
            prevEl: '.new-product-next',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                width: 300,


            },
            576: {
                slidesPerView: 3,
                // width: 990,


            },
            768: {
                slidesPerView: 4,
                // width: 990,


            },
            992: {
                slidesPerView: 4,
                // width: 990,


            },
            1199: {
                slidesPerView: 5,
                // width: 990,


            },
        },

    });
    var swiper5 = new Swiper('.you-view-products-list', {
        slidesPerView: 5,
        breakpoints: {
            320: {
                slidesPerView: 1,
                width: 300,


            },
            768: {
                slidesPerView: 3,
                // width: 990,


            },
            992: {
                slidesPerView: 4,
                // width: 990,


            },
            1199: {
                slidesPerView: 5,
                // width: 990,


            },
        },
    });


    function resizeScrenn() {
        if ($(window).width() <= 992) {
            if ($(".populat-catalog-swiper").length > 0) {
                var swiperss = new Swiper('.populat-catalog-swiper', {
                    slidesPerView: 'auto',
                    freeMode: true,
                    breakpoints: {
                        320: {
                            slidesPerView: 2,
                            // width: 990,


                        },
                    },

                });
            }
        }
    }
    resizeScrenn();

    $(window).resize(function () {
        resizeScrenn();
    });


    function resizeScrenn9() {
        if ($(window).width() <= 576) {
            if ($(".news-swiper-3").length > 0) {
                var swiperss9 = new Swiper('.news-swiper-3', {
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.news3-swiper-pagination',
                        dynamicBullets: true,
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            // width: 990,
                            loop: false,
                            // freeMode: true,
                            spaceBetween: 10,
                            width: 300,



                        },
                    },

                });
            }
            $('.news-prev-article span').text('Пдедыщущая');
            $('.news-next-article span').text('Следующая');
        }
    }
    resizeScrenn9();

    $(window).resize(function () {
        resizeScrenn9();
    });
    function resizeScrenn8() {
        if ($(window).width() <= 576) {
            if ($(".news-swiper-2").length > 0) {
                var swiperss8 = new Swiper('.news-swiper-2', {
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.news2-swiper-pagination',
                        dynamicBullets: true,
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            // width: 990,
                            loop: false,
                            // freeMode: true,
                            spaceBetween: 10,
                            width: 300,



                        },
                    },

                });
            }
        }
    }
    resizeScrenn8();

    $(window).resize(function () {
        resizeScrenn8();
    });


    function resizeScrenn7() {
        if ($(window).width() <= 576) {
            if ($(".news-swiper-1").length > 0) {
                var swiperss7 = new Swiper('.news-swiper-1', {
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.news1-swiper-pagination',
                        dynamicBullets: true,
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            // width: 990,
                            loop: false,
                            // freeMode: true,
                            spaceBetween: 10,
                            width: 300,



                        },
                    },

                });
            }
        }
    }
    resizeScrenn7();

    $(window).resize(function () {
        resizeScrenn7();
    });


    function resizeScrenn6() {
        if ($(window).width() <= 992) {
            if ($(".news-more-articles-block-swiper").length > 0) {
                var swiperss6 = new Swiper('.news-more-articles-block-swiper', {
                    slidesPerView: 'auto',
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            // width: 990,
                            centeredSlides: true,

                        },
                        768: {
                            slidesPerView: 2,
                            // width: 990,


                        },
                    },

                });
            }
        }
    }
    resizeScrenn6();

    $(window).resize(function () {
        resizeScrenn6();
    });


    function resizeScrenn5() {
        if ($(window).width() <= 992) {
            if ($(".delivery-tabs-swiper").length > 0) {
                var swiperss5 = new Swiper('.delivery-tabs-swiper', {
                    slidesPerView: 'auto',
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            // width: 990,
                            centeredSlides: true,

                        },
                        768: {
                            slidesPerView: 2,
                            // width: 990,


                        },
                    },

                });
            }
        }
    }
    resizeScrenn5();

    $(window).resize(function () {
        resizeScrenn5();
    });

    function resizeScrenn4() {
        if ($(window).width() <= 992) {
            if ($(".delivery-region-swiper").length > 0) {
                var swiperss4 = new Swiper('.delivery-region-swiper', {
                    slidesPerView: 'auto',
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            // width: 990,
                            centeredSlides: true,


                        },
                        768: {
                            slidesPerView: 2,
                            // width: 990,


                        },
                    },

                });
            }
        }
    }
    resizeScrenn4();

    $(window).resize(function () {
        resizeScrenn4();
    });


    function resizeScrenn2() {
        if ($(window).width() <= 576) {
            if ($(".last-dat-product-in-catalog").length > 0) {
                var swiperss2 = new Swiper('.last-dat-product-in-catalog', {
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.last-dat-swiper-pagination',
                        dynamicBullets: true,
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            // width: 990,


                        },
                    },

                });
            }
        }
    }
    resizeScrenn2();

    $(window).resize(function () {
        resizeScrenn2();
    });

    var swiper3 = new Swiper('.all-firm-slider', {
        slidesPerView: 'auto',
        spaceBetween: 100,
        loop: true,
        // freeMode: true,
        autoplay: true,
        breakpoints: {
            320: {
                slidesPerView: 3,
                // width: 990,
                spaceBetween: 44,
                autoplay: true,


            },
            576: {
                slidesPerView: 5,
                // width: 990,
                spaceBetween: 44,
                autoplay: true,


            },
            768: {
                slidesPerView: 7,
                // width: 990,
                spaceBetween: 44,
                autoplay: true,


            },
            992: {
                slidesPerView: 9,
                // width: 990,
                spaceBetween: 44,
                autoplay: true,


            },
        },


    });

    var swiper4 = new Swiper('.comments-ya', {
        slidesPerView: 2,
        spaceBetween: 24,
        navigation: {
            nextEl: '.comments-prev',
            prevEl: '.comments-next',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                // width: 990,
                // spaceBetween: 44,


            },
            576: {
                slidesPerView: 2,
                // width: 990,
                // spaceBetween: 44,


            },
        },

    });

    function headerScroll() {
        if ($(window).scrollTop() > 60) {
            $('.header-main-bottom').css('position','fixed').css('z-index','100').css('width','100%').css('top','0').fadeIn(30);

        } else {
            $('.header-main-bottom').css('position','relative').fadeIn(30);

        }
    }

    headerScroll();

    $(window).scroll(function () {
        headerScroll();
    });


    $('.header-bottom-catalog').click(function () {
        $('.menu-sandwich').toggleClass('active');
        $(this).toggleClass('active');
        $('.header-popup-catalog').slideToggle(200);

        setTimeout(function() {
            $(this).addClass('active');
        }, 200);
        if($(this).hasClass('active')){
            $('.header-popup-catalog').addClass('active');
        } else {
            $('.header-popup-catalog').removeClass('active');
        }

    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".header-bottom-catalog").length) {
            $('.header-popup-catalog').removeClass('active');
        }
        e.stopPropagation();
    });




    // $(document).click(function (e) {
    //     if (!$(e.target).closest(".header-bottom-catalog").length) {
    //         $('.header-bottom-catalog').removeClass('active');
    //         $('.menu-sandwich').removeClass('active');
    //     }
    //     e.stopPropagation();
    // });

    $('.header-nav-panel-item').hoverIntent({
        over: function () {

            $(this).children('.nav-panel-list-lvl-2').slideDown(150);
            $(this).mouseleave(function () {
                $(this).children('.nav-panel-list-lvl-2').slideUp(150);
            });
        },
        out: function () {


        }
    });

    $('.product-add-to-basket').on('click', function () {
       $(this).addClass('active');
       $(this).find('.icon-basket use').attr('xlink:href','static/img/svg/symbol/sprite.svg#added');
       $(this).find('.product-add-to-basket-text').text('Перейти в корзину')
    });




    // SELECT OPTIONS
    (function ( $ ) {
        var elActive = '';
        $.fn.selectCF = function( options ) {

            // option
            var settings = $.extend({

                change: function( ){ }, // event change
            }, options );

            return this.each(function(){

                var selectParent = $(this);
                list = [],
                    html = '';


                $(selectParent).hide();
                if( $(selectParent).children('option').length == 0 ){ return; }
                $(selectParent).children('option').each(function(){
                    if( $(this).is(':selected') ){ s = 1; title = $(this).text(); }else{ s = 0; }
                    list.push({
                        value: $(this).attr('value'),
                        text: $(this).text(),
                        selected: s,
                    })
                });

                // style

                html += "<ul class='selectCF'>";
                html += 	"<li class='select'>";
                html +=         "<div class='titleCF select-input'>"+title+"</div>";
                html += 		"<div class='append-icon'><svg class='icon icon-arrow-down'><use xlink:href='static/img/svg/symbol/sprite.svg#arrow-down'></use></svg></div>";
                html += 		"<ul class='select-options'>";
                $.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
                    html += 			"<li value="+v.value+" class='"+s+"'>"+v.text+"</li>";});
                html += 		"</ul>";
                html += 	"</li>";
                html += "</ul>";

                $(selectParent).after(html);
                var customSelect = $(this).next('ul.selectCF'); // add Html
                var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
                var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
                var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');


                // handle active select
                $(customSelect).unbind('click').bind('click',function(e){
                    e.stopPropagation();
                    if($(this).hasClass('onCF')){
                        elActive = '';
                        $(this).removeClass('onCF');
                        $(this).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                        $(this).removeClass('searchActive'); $(seachElInput).val('');
                        $(seachElOption).show();
                    }else{
                        if(elActive != ''){
                            $(elActive).removeClass('onCF');
                            $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                            $(seachElOption).show();
                        }
                        elActive = $(this);
                        $(this).addClass('onCF');
                        $(this).children().find('.icon-arrow-down').addClass('arrow-rotate');
                        $(seachEl).children('input').focus();
                    }
                });

                // handle choose option
                var optionSelect = $(customSelect).children('li').children('ul').children('li');
                $(optionSelect).bind('click', function(e){
                    var value = $(this).attr('value');
                    if( $(this).hasClass('selected') ){
                        //
                    }else{
                        $(optionSelect).removeClass('selected');
                        $(this).addClass('selected');
                        $(customSelect).children('li').children('.titleCF').html($(this).html());
                        $(selectParent).val(value);
                        settings.change.call(selectParent); // call event change
                    }
                });

                // handle search
                $(seachEl).children('input').bind('keyup', function(e){
                    var value = $(this).val();
                    if( value ){
                        $(customSelect).addClass('searchActive');
                        $(seachElOption).each(function(){
                            if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
                                // not item
                                $(this).fadeOut();
                            }else{
                                // have item
                                $(this).fadeIn();
                            }
                        })
                    }else{
                        $(customSelect).removeClass('searchActive');
                        $(seachElOption).fadeIn();
                    }
                })

            });
        };
        $(document).click(function(){
            if(elActive != ''){
                $(elActive).removeClass('onCF');
                $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
            }
        })
    }( jQuery ));

    $(function(){
        $( ".test" ).selectCF({
            color: "#FFF",
            backgroundColor: "#663052",
            change: function () {
                var value = $(this).val();
                var text = $(this).children('option:selected').html();
            }
        });
    });



    $('.product-content-added-to-cart').click(function () {
        $(this).addClass('this-added-to-cart');
        $(this).children('.product-content-after--added-to-cart-wrap').addClass('active-added');
    });

    $('.tabs-teamlight').click(function () {
       // $(this).addClass('acitve');
        var tabs = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs-product-content .' + tabs).addClass('active').siblings().removeClass('active');

    });


    $(".phone-mask").mask("+7(900)000-00-00");


    //var $form = $("#checkout-form"),
    //     $successMsg = $(".error-email-input-text");
    // $.validator.addMethod("letters", function(value, element) {
    //     return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
    // });
    $("#checkout-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                // letters: true
            },
            email: {
                required: true,
                email: true,
            },
            tel:{
                required: true,
                minlength: 16,
            },
            punkt:{
                required: true,
                minlength: 3,
            },
            address:{
                required: true,
                minlength: 3,
            }
        },
        messages: {
            name: "Необходимо указать имя",
            email: "Необходимо указать электронный адрес",
            tel: "Необходимо указать номер телефона",
            punkt: "Необходимо указать населенный пункт",
            address: "Необходимо указать адрес",
        },
        submitHandler: function() {
            $successMsg.show();
        }
    });




    $('.checkout-choise-platform-input').on('click',function () {
        $('.checkout-choise-platform-input').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $toChoise = $(this);
        $('.checkout-choise-platform input').removeAttr('data-pay','checked');
        $toChoise.parent().find('.checkout-choise-platform input').attr('data-pay','checked');
    });


    // при вводе текста в поиске выполнить
    $(".input-search").on('keydown',function() {
        if ($(this).val().length) {
            $(this).addClass('active');
            $('.search-popup').slideDown(200);
            $('.header-bottom-seacrh-submit .icon').css('fill','#00B2CB');
        } else {
            $(this).removeClass('active');
            $('.search-popup').slideUp(200);
            $('.header-bottom-seacrh-submit .icon').css('fill','#383838');
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".search-popup,.input-search").length) {
            $('.search-popup').slideUp(200);
        }
        e.stopPropagation();
    });

    $(".index-real-review-rateyo").each( function() {
        var rating = $(this).attr("data-rating");
        $(this).rateYo(
            {
                rating: 5, //rating
                // "ratedFill": "#FF4141",
                multiColor: {

                    "startColor": "#f35a28", //RED
                    "endColor"  : "#FDC630"  //GREEN
                },
                "starWidth": "20px",
                "spacing": "8px",
                "starSvg": '<svg height="512pt" viewBox="0 -11 512.00047 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m510.644531 185.011719c-3.878906-11.933594-15.425781-20.132813-31.683593-22.496094l-132.511719-19.257813-59.265625-120.074218c-7.269532-14.730469-18.636719-23.183594-31.183594-23.183594s-23.914062 8.453125-31.183594 23.1875l-59.257812 120.070312-132.515625 19.257813c-16.261719 2.363281-27.8125 10.5625-31.6875 22.496094-3.875 11.933593.648437 25.355469 12.414062 36.820312l95.890625 93.464844-22.640625 131.980469c-2.894531 16.878906 2.039063 26.992187 6.6875 32.507812 5.453125 6.46875 13.40625 10.03125 22.394531 10.03125 6.761719 0 13.953126-1.980468 21.378907-5.882812l118.519531-62.308594 118.527344 62.3125c7.421875 3.902344 14.613281 5.878906 21.375 5.878906h.003906c8.984375 0 16.941406-3.5625 22.394531-10.03125 4.644531-5.511718 9.582031-15.628906 6.683594-32.507812l-22.636719-131.980469 95.886719-93.464844c11.761719-11.464843 16.285156-24.886719 12.410156-36.820312zm0 0"/></svg>',
                readOnly: true
            }
        );
    });



    $('.header-basket').hoverIntent({
        over: function () {

            $('.mini-basket-popup').slideDown(150);
            $('.mini-basket-popup').mouseleave(function () {
                $(this).slideUp(150);
            });
        },
        out: function () {


        }
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".mini-basket-popup").length) {
            $('.mini-basket-popup').slideUp(200);
        }
        e.stopPropagation();
    });



    // ============================================ MOBILE ================================================//

    function headerScroll2() {
        if ($(window).scrollTop() > 0) {
            $('.mobile-header-992').css('position','fixed').css('z-index','100').css('width','100%').fadeIn(100);

        } else {
            $('.mobile-header-992').css('position','relative').fadeIn(100);

        }
    }

    headerScroll2();

    $(window).scroll(function () {
        headerScroll2();
    });




    $('.mobile-menu-content-arrow').on('click',function () {
        $('.mobile-menu-content-arrow').removeClass('active');
        $(this).addClass('active');

        $(this).next('.mobile-menu-content-list').slideToggle(200);


    });


    $(function () {
       if($(window).width() <= 992){
           $('.mobile-header-bottom-catalog').click(function () {

               if($(this).hasClass('active')){
                   $('.header-catalog-text',this).text('Закрыть');
                   $('.mobile-menu-fixed2').addClass('active');
               } else {
                   $('.header-catalog-text',this).text('Меню');
                   $('.mobile-menu-fixed2,.mobile-menu-fixed,.mobile-menu-fixed3').removeClass('active');
               }

           });
       }
    });

    $('.mobile-menu-main-item-catalog').click(function () {
        $('.mobile-menu-fixed').addClass('active');
    });
    $('.mobile-menu-main-city').click(function () {
        $('.mobile-menu-fixed3').addClass('active')
    });
    $('.mobile-menu-go-back').click(function () {
       $('.mobile-menu-fixed').removeClass('active');
       $('.mobile-menu-fixed3').removeClass('active')
    });


    $(document).click(function (e) {
        if (!$(e.target).closest(".header-bottom-catalog,.mobile-menu-fixed2,.mobile-menu-fixed,.mobile-menu-fixed3").length) {
            $('.header-bottom-catalog').removeClass('active');
            $('.menu-sandwich').removeClass('active');
            $('.header-catalog-text-mobile').text('Меню');
            $('.mobile-menu-fixed2,.mobile-menu-fixed,.mobile-menu-fixed3').removeClass('active');
        }
        e.stopPropagation();
    });

    // открываем фильтр для моб версии

    $('.filter-mobile-button').click(function () {
       $('.mobile-filter-fixed').toggleClass('active');
    });

    $('.mobile-filter-go-back').click(function () {
        $('.mobile-filter-fixed').removeClass('active');
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".filter-mobile-button,.mobile-filter-fixed").length) {
            $('.mobile-filter-fixed').removeClass('active');
        }
        e.stopPropagation();
    });


    // при вводе текста в поиске выполнить
    $(".mobile-menu-ci").on('keydown',function() {
        if ($(this).val().length) {
            $(this).addClass('active');
            $('.mobile-menu-input-content').slideDown(200);
            // $('.header-bottom-seacrh-submit .icon').css('fill','#00B2CB');
        } else {
            $(this).removeClass('active');
            $('.mobile-menu-input-content').slideUp(200);
            // $('.header-bottom-seacrh-submit .icon').css('fill','#383838');
        }
        $('.mobile-menu-input-button').click(function () {
           $('.mobile-menu-ci').val('');
        });
    });


    $('.catalog-product-pagi-toggle').click(function () {
       $('.catalog-product-pagi-more-text').slideToggle(200)
    });


    $('.popup-chise-city-item').click(function () {
       var choisecity = $(this).text() ;
       $('.popup-chise-city-item').removeAttr('data-city-choise', 'checked');
        $(this).attr('data-city-choise', 'checked');
       $('.popup-input-val-text').val(choisecity);

    });

    // Quantity в архиве товара
    $('.basket-product-button-plus,.mini-basket-product-button-plus').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.basket-product-button-minus,.mini-basket-product-button-minus').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });


});
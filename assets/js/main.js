(function ($) {
    "use strict";
    
    jQuery(document).ready(function($){

        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn,.icon-play').magnificPopup({
            type: 'video'
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });
        
        /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
      
        /*-------------------------------------
            Header carousel
        --------------------------------------*/
        var $headerCarousel = $('.header-carousel');
        if ($headerCarousel.length > 0) {
            $headerCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                dots: true,
                nav: false,
                animateIn: 'fadeIn',
                animateOut:'fadeOut',
                responsive: {
                    0: {
                        items: 1,
                        nav:false,
                        center:false,
                    },
                    768: {
                        items: 1,
                        center:false,
                    },
                    960: {
                        items: 1,
                        center:false,
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        } 
        
      
        /*-------------------------------------
            Press Review carousel
        --------------------------------------*/
        var $pressReviewCarousel = $('.press-review-carousel');
        if ($pressReviewCarousel.length > 0) {
            $pressReviewCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                dots: true,
                thumbs:true,
                thumbsPrerendered:true,
                nav: true,
                navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
                navContainer:$('.press-review-slider-nav-inner'),
                responsive: {
                    0: {
                        items: 1,
                        nav:false
                    },
                    768: {
                        items: 1,
                        nav:false
                    },
                    960: {
                        items: 1,
                        nav:false
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        } 
        /*-------------------------------------
            Image Gallery carousel
        --------------------------------------*/
        var $imageGalleryCarousel = $('.image-gallery-carousel');
        if ($imageGalleryCarousel.length > 0) {
            $imageGalleryCarousel.owlCarousel({
                loop: true,
                autoplay: false, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                dots: true,
                thumbs:true,
                thumbsPrerendered:true,
                nav: true,
                navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
                navContainer:$('.image-gallery-carousel-navigation'),
                responsive: {
                    0: {
                        items: 1,
                        nav:false
                    },
                    420:{
                        nav:false,
                        items:1,
                    },
                    768: {
                        items: 1
                    },
                    960: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    },
                    1920: {
                        items: 1
                    }
                }
            });
        } 
        

        /*-------------------------------------
            Movie Cast carousel
        --------------------------------------*/
        var $castCarousel = $('.cast-actors-carousel');
        if ($castCarousel.length > 0) {
            $castCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: true,
                nav: true,
                smartSpeed:1000,
                navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
                navContainer:$('.cast-slider-nav-inner'),
                responsive: {
                    0: {
                        items: 1,
                        nav:false,
                    },
                    768: {
                        items: 2,
                        nav:false,
                    },
                    960: {
                        items: 2,
                        nav:false,
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }

        $(document).on('click','.nav-link',function(e){
            
            var anchor = $(this).attr('href');
            var hash = anchor.slice(0,1);
            var offset = $(anchor).offset().top;

            if( '#' == hash ){
                e.preventDefault();
                $('body,html').animate({
                    scrollTop:offset
                },2000);
            }

        });

        /*---------------------------------
            Gallery Masonry activation
        ----------------------------------*/
        var PortflioContainer = $('#movie-gallery');
        if (PortflioContainer.length > 0) {
            PortflioContainer.imagesLoaded(function () {
                var latestWorkMasonry = $('#movie-gallery').isotope({
                    itemSelector: '.grid-size'
                });
                $(document).on('click', '.movie-gallery-menu ul li', function () {
                    var filterValue = $(this).attr('data-filter');
                    latestWorkMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
        }
        
        /*---------------------------------
           Gallery Filter Menu Active class
        ----------------------------------*/
        var portfoliofilterMenu = '.movie-gallery-menu ul li';
        $(document).on('click', portfoliofilterMenu, function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });


    });
    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
       /*--------------------------
        sticky menu activation
       -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;
       
    });
           
    $(window).on('load',function(){

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();
        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click','.cancel-preloader a',function(e){
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });


/* 
=================================================================
13 - ファイル選択
=================================================================	
*/


$('.custom-file-input').on('change', handleFileSelect);
function handleFileSelect(evt) {
    $('#preview').remove();// 繰り返し実行時の処理
    $(this).parents('.input-group').after('<div id="preview"></div>');
    var files = evt.target.files;

    for (var i = 0, f; f = files[i]; i++) {

        var reader = new FileReader();

        reader.onload = (function(theFile) {
            return function(e) {
                if (theFile.type.match('image.*')) {
                    var $html = ['<div class="d-inline-block mr-1 mt-1"><img class="img-thumbnail" src="', e.target.result,'" title="', escape(theFile.name), '" style="height:100px;" /><div class="small text-muted text-center">', escape(theFile.name),'</div></div>'].join('');// 画像では画像のプレビューとファイル名の表示
                } else {
                    var $html = ['<div class="d-inline-block mr-1"><span class="small">', escape(theFile.name),'</span></div>'].join('');//画像以外はファイル名のみの表示
                }

                $('#preview').append($html);
            };
        })(f);

        reader.readAsDataURL(f);
    }

    $(this).next('.custom-file-label').html(+ files.length + '個のファイルを選択しました');
}

//ファイルの取消
$('.reset').click(function(){
    $(this).parent().prev().children('.custom-file-label').html('ファイル選択...');
    $('.custom-file-input').val('');
    $('#preview').remove('');
})

//パスワードリセット

$(document).ready(function()	{
	$('#realperson-check').realperson();
});




}(jQuery));	

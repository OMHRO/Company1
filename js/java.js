
$(function(){

  // going up

        $(".up").css({
          display:"none"
        });

        $(window).scroll(function(){

              let scrollWindow = $(this).scrollTop();

              if(scrollWindow >= 640)
              {

                    $(".up").css({
                      display:"block"

                    });

              } else {
                $(".up").css({
                  display:"none"

                });
              };

        });

        $(".up").click(function () {

              $("html, body").animate({

                  scrollTop:  $("header").offset().top

              }, 2500);

        });

        // adjust header height

        let myHeader =  $('.header'),

            mySlider =  $(".slider");

        myHeader.height($(window).height());

        $(window).resize(function (){

          myHeader.height($(window).height());

          mySlider.each(function(){

            $(this).css('padding', ($(window).height() - $(".slider .text").height()) / 2);

          });

        });

        // links add active class

        $(".links ul li").click ( function () {

              $(this).addClass("active").siblings().removeClass("active");

        });

        // menu add active class to parent

        $(".fa-bars").click( function () {

              $(".menu ul").parent().toggleClass("open");

        });

        // adjust bxslider list item center

        mySlider.each(function(){

          $(this).css('padding', ($(window).height() - $(".slider .text").height()) / 2);

        });

        // trigger the bx slider

        mySlider.bxSlider({

          pager: false

        });

        // smooth scroll to div

        $(".navbar .links ul li a").click(function(){

            $("html, body").animate({

               scrollTop: $("#" + $(this).data("cool")).offset().top //- 50 // => - margin-top  h1

            },1000 );

            // console.log($(this).data("cool"));

        });

        // our aute slider code

        (function autoSlider(){

            $('.t-slider .active').each(function () {

                if (!$(this).is(':last-child')) {

                  $(this).delay(3000).fadeOut(1000, function () {

                      $(this).removeClass('active').next().addClass('active').fadeIn();

                        autoSlider();

                  });

                } else {

                  $(this).delay(3000).fadeOut(1000, function(){

                        $(this).removeClass('active');

                        $('.t-slider div').eq(0).addClass("active").fadeIn();

                        autoSlider();

                  });

                }

            });

        }());

        // trigger mixitup

         mixitup($("#container"));

         $(".projects ul li").click(function() {

              $(this).addClass("selected").siblings().removeClass("selected");

         })

       //trigger scrollTop

       // $("html").niceScroll({
       //
       //    cursorcolor: 'var(--p-w-color)',
       //    cursorborder: 'var(--p-w-color)',
       //    cursorborderradius: '0',
       //    scrollspeed: '200'
       //
       // });


});



// loading

$(window).ready(function(){

    $(".loading .animate").fadeOut(5000, function(){

          $(this).parent().fadeOut(2000, function(){

             $(this).parent().css("overflow","auto")
          });

    });

});

















//

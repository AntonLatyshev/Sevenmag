$(function() {
    $('.news-slider').slick({
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

$(function() {
    $('.big-slider').slick({
        slidesToShow: 5,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 731,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.search-button').click(function(){
        $('.text-field').toggle(500);
    });
});

$(function() {
    $('.post-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 411,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

$(function() {
    $('.slider-mini').slick({
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 684,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 668,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 666,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.play').click(function(){
        $('.play').hide();
        $('.pause').show();
    });
    $('.pause').click(function(){
        $('.pause').hide();
        $('.play').show();
    });
});

$(function(){

    var flag = true;
    $('.cmn-toggle-switch').click(function () {
        if (flag) {
            flag = false;
            func1.call(this);
        } else {
            flag = true;
            func2.call(this);
        }
        return false;
    });

    function func1() {
        $('.navigation').show();
        $('.cmn-toggle-switch__htx').addClass("active");
    }
    function func2() {
        $('.navigation').hide();
        $('.cmn-toggle-switch__htx').removeClass("active");
    }
});
// eslint-disable-next-line no-undef
$(function () {

    "use strict";

    //===== Prealoder

    // eslint-disable-next-line no-undef
    // $(window).on('load', function (event) {
    //     eslint-disable-next-line no-undef
    //     $('.preloader').delay(500).fadeOut(500);
    // });


    //===== Sticky

    // eslint-disable-next-line no-undef
    $(window).on('scroll', function (event) {
        // eslint-disable-next-line no-undef
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            // eslint-disable-next-line no-undef
            $(".navbar-area").removeClass("sticky");
            // eslint-disable-next-line no-undef
            $(".navbar .navbar-brand img").attr("src", "assets/images/logo.svg");
        } else {
            // eslint-disable-next-line no-undef
            $(".navbar-area").addClass("sticky");
            // eslint-disable-next-line no-undef
            $(".navbar .navbar-brand img").attr("src", "assets/images/logo-2.svg");
        }
    });



    //===== Section Menu Active

    // eslint-disable-next-line no-undef
    var scrollLink = $('.page-scroll');
    // Active link switching
    // eslint-disable-next-line no-undef
    $(window).scroll(function () {
        // eslint-disable-next-line no-undef
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            // eslint-disable-next-line no-undef
            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                // eslint-disable-next-line no-undef
                $(this).parent().addClass('active');
                // eslint-disable-next-line no-undef
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


    //===== close navbar-collapse when a  clicked

    // eslint-disable-next-line no-undef
    $(".navbar-nav a").on('click', function () {
        // eslint-disable-next-line no-undef
        $(".navbar-collapse").removeClass("show");
    });

    // eslint-disable-next-line no-undef
    $(".navbar-toggler").on('click', function () {
        // eslint-disable-next-line no-undef
        $(this).toggleClass("active");
    });

    // eslint-disable-next-line no-undef
    $(".navbar-nav a").on('click', function () {
        // eslint-disable-next-line no-undef
        $(".navbar-toggler").removeClass('active');
    });    
    

    //====== Magnific Popup

    // eslint-disable-next-line no-undef
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Magnific Popup

    // eslint-disable-next-line no-undef
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== Counter Up

    // eslint-disable-next-line no-undef
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });


    //===== testimonial active

    // eslint-disable-next-line no-undef
    $('.testimonial-active').slick({
        dots: true,
        speed: 800,
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    //===== Back to top

    // Show or hide the sticky footer button
    // eslint-disable-next-line no-undef
    $(window).on('scroll', function (event) {
        // eslint-disable-next-line no-undef
        if ($(this).scrollTop() > 600) {
            // eslint-disable-next-line no-undef
            $('.back-to-top').fadeIn(200)
        } else {
            // eslint-disable-next-line no-undef
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    // eslint-disable-next-line no-undef
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        // eslint-disable-next-line no-undef
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //=====  WOW active

    // eslint-disable-next-line no-undef
    new WOW().init();


    //=====  particles


    // eslint-disable-next-line no-undef
    if (document.getElementById("particles-1")) particlesJS("particles-1", {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": !0,
                    "value_area": 4000
                }
            },
            "color": {
                "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 33,
                    "height": 33
                }
            },
            "opacity": {
                "value": 0.15,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 0.2,
                    "opacity_min": 0.15,
                    "sync": !1
                }
            },
            "size": {
                "value": 50,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 2,
                    "size_min": 5,
                    "sync": !1
                }
            },
            "line_linked": {
                "enable": !1,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": !0,
                "speed": 1,
                "direction": "top",
                "random": !0,
                "straight": !1,
                "out_mode": "out",
                "bounce": !1,
                "attract": {
                    "enable": !1,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": !1,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": !1,
                    "mode": "repulse"
                },
                "resize": !0
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1,
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": !0
    });

    // eslint-disable-next-line no-undef
    if (document.getElementById("particles-2")) particlesJS("particles-2", {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": !0,
                    "value_area": 4000
                }
            },
            "color": {
                "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 33,
                    "height": 33
                }
            },
            "opacity": {
                "value": 0.15,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 0.2,
                    "opacity_min": 0.15,
                    "sync": !1
                }
            },
            "size": {
                "value": 50,
                "random": !0,
                "anim": {
                    "enable": !0,
                    "speed": 2,
                    "size_min": 5,
                    "sync": !1
                }
            },
            "line_linked": {
                "enable": !1,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": !0,
                "speed": 1,
                "direction": "top",
                "random": !0,
                "straight": !1,
                "out_mode": "out",
                "bounce": !1,
                "attract": {
                    "enable": !1,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": !1,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": !1,
                    "mode": "repulse"
                },
                "resize": !0
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1,
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": !0
    });






});

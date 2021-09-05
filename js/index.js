window.addEventListener("load", function () {
    $(document).ready(function () {
        $(".testimonial__slider").slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
			autoplay:true,
            dots: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });

        $(".navbar-toggler-icon").click(function () {
            $(".navbar-toggler-icon").toggleClass("fa-times");
        });

        $(".about__number").counterUp({
            time: 2000,
        });

        $(".back-to-top").click(function () {
            $("html").animate({ scrollTop: 0 });
        });

        $(".toggle-dark-mode").click(function () {
            if ($("body").attr("dark-mode")) {
                $("body").removeAttr("dark-mode");
                $(".dark-mode-icon").removeClass("fas fa-sun");
            } else {
                $("body").attr("dark-mode", "on");
                $(".dark-mode-icon").addClass("fas fa-sun");
            }
        });

        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 0) {
                $("header").addClass("onScroll");
            } else {
                $("header").removeClass("onScroll");
            }

            if (window.pageYOffset > 100) {
                $(".back-to-top").addClass("active");
            } else {
                $(".back-to-top").removeClass("active");
            }
        });
    });
});

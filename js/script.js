jQuery(document).ready(function ($) {
    $('#lightSlider').lightSlider({
        item: 3,
        slideMove: 3,
        speed: 500,

        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    item: 2,
                    slideMove: 2,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 2,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }
        ]


    });

});

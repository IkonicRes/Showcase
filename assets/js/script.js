// $('.owl-carousel').owlCarousel({
//     loop:true,
//     items:1,
//     nav:true,
//     autoHeight:true,
//   responsive:{
//         0:{
//             items:1,
//             stagePadding: 60
//         },
//         600:{
//             items:1,
//             stagePadding: 100
//         },
//         1000:{
//             items:1,
//             stagePadding: 200
//         },
//         1200:{
//             items:1,
//             stagePadding: 250
//         },
//         1400:{
//             items:1,
//             stagePadding: 300
//         },
//         1600:{
//             items:1,
//             stagePadding: 350
//         },
//         1800:{
//             items:1,
//             stagePadding: 400
//         }
//     }
// })

$(document).ready(function () {
    var $carousel = $('.owl-carousel');

    $carousel.owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        autoHeight: true,
        controls: false,
        mouseDrag: true, // Disable click and drag
        responsive:{
                    0:{
                        items:1,
                        stagePadding: 6 
                    },
                    600:{
                        items:1,
                        stagePadding: 100
                    },
                    1000:{
                        items:1,
                        stagePadding: 200
                    },
                    1200:{
                        items:1,
                        stagePadding: 250
                    },
                    1400:{
                        items:1,
                        stagePadding: 300
                    },
                    1600:{
                        items:1,
                        stagePadding: 350
                    },
                    1800:{
                        items:1,
                        stagePadding: 400
                    }
                }
    });
    var contactButton = document.getElementById('contact-button');
    var contactModal = document.getElementById('contactModal');
    var closeModal = contactModal.querySelector('.close');

    contactButton.addEventListener('click', function() {
        contactModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    closeModal.addEventListener('click', function() {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    });

    // window.addEventListener('click', function(event) {
    //     if (event.target === contactModal) {
    //         contactModal.style.display = 'none';
    //         document.body.style.overflow = 'auto'; // Enable scrolling
    //     }
    // });


    var $stage = $carousel.find('.owl-stage');
    var carouselWidth = $carousel.width();
    var scrollStep = carouselWidth / 5; // Adjust the scrolling speed as needed

    $carousel.on('mouseenter', function (event) {
        var $carousel = $(event.currentTarget);

        // $carousel.addClass('hovered');

        // $carousel.on('mousemove', function (event) {
        //     var offsetX = event.pageX - $carousel.offset().left;

        //     if (offsetX < scrollStep) {
        //         $stage.css('transform', 'translateX(' + scrollStep + 'px)');
        //     } else if (offsetX > carouselWidth - scrollStep) {
        //         $stage.css('transform', 'translateX(-' + scrollStep + 'px)');
        //     } else {
        //         $stage.css('transform', 'translateX(0)');
        //     }
        // });
    });


});
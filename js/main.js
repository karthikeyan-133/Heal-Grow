(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);

// Function to handle video playback
document.addEventListener('DOMContentLoaded', function() {
    // Get all video elements
    const videos = document.querySelectorAll('.video-background video');
    
    // Function to play videos
    function playVideos() {
        videos.forEach(function(video) {
            // Reset the video
            video.currentTime = 0;
            
            // Ensure video is muted (required for autoplay in most browsers)
            video.muted = true;
            
            // Add playsinline attribute for iOS
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            
            // Play the video with error handling
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise.then(function() {
                    // Video started playing successfully
                    console.log("Video playing successfully");
                }).catch(function(error) {
                    console.log("Video play failed:", error);
                    // Try to play again after user interaction
                    document.addEventListener('click', function() {
                        video.play().catch(function(e) {
                            console.log("Still failed to play:", e);
                        });
                    }, { once: true });
                });
            }
        });
    }
    
    // Play videos when the page loads
    playVideos();
    
    // Play videos when carousel slides change
    const carousel = document.getElementById('header-carousel');
    if (carousel) {
        carousel.addEventListener('slide.bs.carousel', function() {
            setTimeout(playVideos, 600);
        });
    }
    
    // Handle mobile devices
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        videos.forEach(function(video) {
            // Add playsinline attribute for iOS
            video.setAttribute('playsinline', '');
            // Add webkit-playsinline for older iOS
            video.setAttribute('webkit-playsinline', '');
        });
    }
});


/* =============================================================================
	AOS LIB
============================================================================= */

AOS.init({
    disable: 'mobile',
    duration: 1300,
    easing: 'ease',
    offset: 25,
    once: true,
    triggerEvent: false
});


/* =============================================================================
	CHECK SCROLL BODY
============================================================================= */

var $siteBody = $('.js-body');

$(document).ready(function(){
    const checkThreshold = 10;

    function checkIt() {
        $(window).scrollTop() > checkThreshold ? $siteBody.addClass('is-scrolled') : $siteBody.removeClass('is-scrolled');
    }
    checkIt();
    
    $(window).on('scroll resize', function() {
        checkIt();
    });
});


/* =============================================================================
	OPEN MENU
============================================================================= */

$(document).ready(function(){
    const $menuHld = $('.js-menu');
    const $menuHamb = $('.js-menu-hamb');
    const $menuList = $('.js-menu-list');
    const $menuItem = $('.js-menu-item');
    const $siteTop = $('.js-site-top');

    $menuHld.click(function() {
        $menuHamb.toggleClass('is-open');
        $menuList.toggleClass('is-open');
        $siteTop.toggleClass('is-open');
    });

    $menuItem.click(function() {
        $menuHamb.removeClass('is-open');
        $menuList.removeClass('is-open');
        $siteTop.removeClass('is-open');
    });
});


/* =============================================================================
	SCROLL TO SECTION
============================================================================= */

$('.js-menu-list').find('a').click(function(e) {
    e.preventDefault();
    var section = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(section).offset().top - 80
    });
});


/* =============================================================================
	VIDEO BANNER
============================================================================= */

var vid = document.getElementById("js-bgvid");
var pauseButton = document.querySelector("#banner-video button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended', function() {
    vid.pause();
    vidFade();
}); 


/* =============================================================================
	FONT WEIGHT
============================================================================= */

$(function () {
    $('.js-section-sec-nav-item').on('click', function () {
        $(this).toggleClass('is-hovered');
    });
});
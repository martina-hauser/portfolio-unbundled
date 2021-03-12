import $ from 'jquery';

$(document).ready(function () {
  // set --vh custom css property
  // thank you, css-tricks! (https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  $('.mobileMainPageNavigation-menuItem.dropdown > a').click(() => {
    $('.mobileMainPageNavigation-menuItem.dropdown').toggleClass('is-open')
    $('.mobileMainPageNavigation-menuItem.dropdown ul').toggleClass('hide')
  })

  // Function to add styles when Overlay Navigation is open
  function addOverlayStyles() {
    $('body').toggleClass('overflow-y-hidden');
    if ($("#mobileMainPageNavigation").hasClass("is-open")) {
      $('.mobileMainPageNavigation-toggleMenu svg use').attr('href', '#close-icon');
      $('.mobileMainPageNavigation-toggleMenu span').text('Menu schliessen');
    } else {
      $('.mobileMainPageNavigation-toggleMenu svg use').attr('href', '#menu-icon');
      $('.mobileMainPageNavigation-toggleMenu span').text('Menu');
    }
  }

  // Navigation Overlay Toggle
  $('[data-toggle-menu]').on("click", function () {
    $("#mobileMainPageNavigation").toggleClass("is-open");
    addOverlayStyles();
  });
});
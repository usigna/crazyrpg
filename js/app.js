function showHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation');
  const navigationLinks = document.querySelectorAll('.navigation__link');

  const handleClick = function () {
    hamburger.classList.toggle('hamburger--active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
    nav.classList.toggle('navigation--active');
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {
      hamburger.classList.remove('hamburger--active');
      nav.classList.remove('navigation--active');
    })
  }

  hamburger.addEventListener('click', handleClick);
}

function useGallery() {
  function handler(e) {
    e.preventDefault();
    largeimage.setAttribute('src', this.getAttribute('href'));
    largeimage.setAttribute('alt', this.querySelector('img').getAttribute('alt'));
    largeimage.animate([
      { opacity: '0'},
      { opacity: '1'}
    ], {
      duration: 500
    });
  }

  const gallery = document.querySelector('.gallery');
  const largeimagecontainer = document.querySelector('.fullimagecontainer');
  const links = gallery.getElementsByTagName('a');
  const largeimage = document.createElement('img');

  largeimage.setAttribute('id', 'fullimage');
  largeimagecontainer.appendChild(largeimage);
      
  for (var i=0; i < links.length; i++) {
    links[i].onclick = handler;
  }

  links[0].click();

  links[0].addEventListener('focus', function() {
    links[0].focus();
  });
}

function useScrollReveal() {
  const slideUp = {
      duration: 2500,
      delay: 200,
      easing: "ease-out",
      scale: 1,
      distance: "12rem"
  };

  ScrollReveal().reveal(".animation", {delay: 300});
  ScrollReveal().reveal(".animation-show", slideUp);
}

function showAnimations() {
  const mobile = window.matchMedia("screen and (min-width: 1250px)");

  if (mobile.matches) {
      useScrollReveal();
  }

  mobile.addListener( function(mobile) {
      if (mobile.matches) {
          useScrollReveal();
      }
  });
};

const init = function () {
  showHamburgerMenu();
  useGallery();
  // showAnimations();
};

document.addEventListener('DOMContentLoaded', init);
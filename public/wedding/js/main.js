window.addEventListener('load', function() {

  /* RING ANIMATION USING SCROLLMAGIC.JS =================================== */

  // Create a new ScrollMagic controller
  var controller = new ScrollMagic.Controller();

  // Get all the target images
  var images = document.querySelectorAll('.engagement-ring .animation__images img');

  // Create a timeline
  var engagementRingTimeline = gsap.timeline();

  // Loop over each image
  for(let i = 0; i < images.length - 1; i++) {
    let nextImage = images[i+1];
    let currentImage = images[i];

    engagementRingTimeline.addLabel(`frame-${i}`)
      .to(currentImage, 1, {className: '-=visible'}, `frame-${i}`)
      .to(currentImage, 1, {className: '+=hidden'}, `frame-${i}`)
      .to(nextImage, 1, {className: '-=hidden'}, `frame-${i}`)
      .to(nextImage, 1, {className: '+=visible'}, `frame-${i}`);
  }

  // Create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: '.engagement-ring.hero',
      triggerHook: 'onLeave',
      duration: '200%'
    })
    .setPin('.engagement-ring.hero')
    .setTween(engagementRingTimeline)
    .addTo(controller);

  // Select the image
  let image = document.querySelector('.mitchie-arbyn-title');

  /* UPDATE TITLE IMAGE BASED ON SCREEN WIDTH ============================== */

  // Define the function that changes the image source
  function changeImageSrc() {
    if (window.innerWidth > 600) {
      image.src = 'images/title.svg';
    } else {
      image.src = 'images/title.webp';
    }
  }

  changeImageSrc();
  window.addEventListener('resize', changeImageSrc);

  /* RSVP FORM MODAL TRIGGER =============================================== */

  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('#rsvp') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button, .cancel-button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.submit-button') || []).forEach(($submit) => {
    $submit.addEventListener('click', () => {
      const $name = document.getElementById('guest-name');
      console.log(checkName($name.value));
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

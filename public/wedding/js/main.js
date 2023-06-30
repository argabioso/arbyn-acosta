window.addEventListener('load', function() {
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
  let image = document.querySelector('#title');

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
});

// (function () {
//   if (!isMobile) {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true
//     });
//   }
// })();

// Start date: November 14, 2011
function updateHowLongKnown() {
  var pastDate = new Date("2011-11-14T08:00:00+08:00");

  // Current date
  var currentDate = new Date();

  // Calculate the difference in milliseconds
  var difference = currentDate - pastDate;

  // Convert milliseconds to days, hours, and minutes
  var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.437 * 12));
  var months = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.437 * 12)) / (1000 * 60 * 60 * 24 * 30.437));
  var days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.437)) / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Print out the remaining time
  let howLongKnownElement = document.querySelector(".how-long-known");
  let interval = 1000000;

  howLongKnownElement.innerHTML = "<span class=\"years\">" + years + "</span><br />years";

  setTimeout(updateHowLongKnown, interval);
}

updateHowLongKnown();

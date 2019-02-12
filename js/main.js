/**
 * Execute the logic on load
 */

window.addEventListener("load", event => {
  const $saveBtn = document.querySelector("#saveForLater");
});

// jQuery onload
$(document).ready(function() {
  $("#saveForLater").click(function() {
    $(this).toggleClass("active");
  });

  $("#tellYourFriends").click(function() {

    // taken from https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript
    var timeStampInMs =
      window.performance &&
      window.performance.now &&
      window.performance.timing &&
      window.performance.timing.navigationStart
        ? window.performance.now() + window.performance.timing.navigationStart
        : Date.now();

    console.log(timeStampInMs, Date.now());
  });
});

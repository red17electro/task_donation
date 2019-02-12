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

  $("#giveNow").click(function(e) {
    e.preventDefault();
    let $value = $("#value");
    let val = parseInt($value.val());
    if (val > 5 && val < 10000) {
      var $elem = $("#progressbar > div");
      var width = 67;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++;
          $elem.width(width + "%");
        }
      }
    } else {
      $value.val("");
    }
  });
});

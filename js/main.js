// Get button
const topBtn = document.getElementById("topBtn");

// Show button after scrolling down
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll smoothly to top
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});

$(document).ready(function () {
  // Step A: Set all items to their default background on load
  $(".custom-carousel .item").each(function () {
    $(this).css("background-image", "url('" + $(this).data("default") + "')");
  });

  // Step B: When clicking an item...
  $(".custom-carousel .item").click(function () {
    // Reset all to default backgrounds
    $(".custom-carousel .item").each(function () {
      $(this)
        .removeClass("active")
        .css("background-image", "url('" + $(this).data("default") + "')");
    });

    // Set this one to its active background
    $(this)
      .addClass("active")
      .css("background-image", "url('" + $(this).data("active") + "')");
  });
});


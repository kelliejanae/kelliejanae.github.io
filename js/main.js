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

//Swiper JS
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  speed: 300,
  autoplay: {
  delay: 9000, // time in ms between slides
  disableOnInteraction: false, // keep autoplay even after user interacts
},

  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

//Read more on click - redirects each card to its designated data-readmore url 
  document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.style.cursor = 'pointer';
    slide.addEventListener('click', () => {
      const url = slide.getAttribute('data-readmore');
      if (url) {
        window.open(url, '_blank'); // Open in new tab
        // or use: window.location.href = url; // to open in same tab
      }
    });
  });

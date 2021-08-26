


// select option 

const selectedAll = document.querySelectorAll(".selected");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  const searchBox = selected.nextElementSibling;

  const optionsList = optionsContainer.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    if (optionsContainer.classList.contains("active")) {
      optionsContainer.classList.remove("active");
    } else {
      let currentActive = document.querySelector(".options-container.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      optionsContainer.classList.add("active");
    }

    searchBox.value = "";
    filterList("");

    if (optionsContainer.classList.contains("active")) {
      searchBox.focus();
    }
  });

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });

  searchBox.addEventListener("keyup", function (e) {
    filterList(e.target.value);
  });

  const filterList = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach((option) => {
      let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
      if (label.indexOf(searchTerm) != -1) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  };
});






// frequently asked question 



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}




// news slider 




//  Hero slides 


var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n2) {
  showSlides2(slideIndex2 += n2);
}

function currentSlide2(n2) {
  showSlides2(slideIndex2 = n2);
}

function showSlides2(n2) {
  var i2;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n2 > slides2.length) {slideIndex2 = 1}    
  if (n2 < 1) {slideIndex2 = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
      slides2[i2].style.display = "none";  
  }
  for (i2 = 0; i2 < dots2.length; i2++) {
      dots2[i2].className = dots2[i2].className.replace(" active2", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active2";
}

// counter 


















$(document).ready(function($) {

  $('.simple-slider-wrapper').each(function() {
      const this_slider = $(this);
      
      const slides = this_slider.find('ul li');
      const control_prev = this_slider.find('.control_prev');
      const control_next = this_slider.find('.control_next');
  
      function slider_init() {
          if (slides.length > 1) {
              control_prev.css('display', 'block');
              control_next.css("display", "block");
          }
      }
      slider_init();
  
      function moveRight() {
          // move last child to beginning of list and set list position to -100%
          this_slider.find('ul li:last-child').prependTo(this_slider.find('ul'));
          slides.css('left', '-100%');
          // move all list elements to right
          slides.stop().animate({ left: 0 }, 500);
      };
  
      function moveLeft() {
          // move all list elements to left
          const arr = [ slides.stop().animate({ left: '-100%' }, 500).promise() ]
          // after animation end move first child to end of list and set list position to 0
          $.when.apply($, arr).then(function() {
              this_slider.find('ul li:first-child').appendTo(this_slider.find('ul'));
              slides.css('left', 0);
          });
      };
  
      control_prev.on("click", function () {
          if (slides.length > 1) {
              moveRight();
          }
      });
  
      control_next.on("click", function () {
          if (slides.length > 1) {
              moveLeft();
          }
      });
  
      // autoplay
      function setAutoplay() {
          let is_slider_on = true;
          let autoplay = setInterval(function () {
              if (slides.length > 1) {
                  moveLeft();
              }
          }, 3000);
  
          this_slider.on('mouseenter', function() {
              clearInterval(autoplay);
              is_slider_on = false;
          });
  
          this_slider.on('mouseleave', function() {
              if (!is_slider_on) {
                  autoplay = setInterval(function () {
                      moveLeft();
                  }, 3000);
                                  is_slider_on = true;
              }
          });
      }
      setAutoplay();
  });
  
  });
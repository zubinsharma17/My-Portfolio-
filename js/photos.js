//  for tabbed galler with buttons to show pics 



// for  extra certificates

const buttons = document.querySelectorAll(".button1");
const cities = document.querySelectorAll(".city");

function hideAllCities() {
  cities.forEach((city) => {
    city.style.display = "none";
  });
}

function showCity(index) {
  hideAllCities();

  cities[index].style.display = "block";
  buttons.forEach((button) => {
    button.classList.remove("active-button1s");
  });
  buttons[index].classList.add("active-button1s");
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showCity(index);
  });
});

document.addEventListener("click", (e) => {
  const target = e.target;

  const isOutside = !target.closest(".tabbed-gallery");

  if (isOutside) {
    hideAllCities();
    buttons.forEach((button) => {
      button.classList.remove("active-button1s");
    });
  }
});


// new design 
document.addEventListener("DOMContentLoaded", function() {
  var photoItems = document.querySelectorAll(".photo-item");

  function checkVisibility() {
    var windowHeight = window.innerHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var trigger = scrollTop + windowHeight - 100;

    for (var i = 0; i < photoItems.length; i++) {
      var photoItem = photoItems[i];
      var photoItemTop = photoItem.getBoundingClientRect().top + scrollTop;

      if (photoItemTop < trigger) {
        photoItem.classList.add("show");
      }
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

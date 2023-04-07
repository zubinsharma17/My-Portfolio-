const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

// PAGE TRANSITION-1
// window.onload = function() {
//   document.getElementById("page-transition").style.opacity = "1";
//   setTimeout(function() {
//     document.getElementById("page-transition").style.opacity = "0";
//   }, 2000); // set the duration of the page transition (in milliseconds)
// }

// PAGE TRANSITION-2

// window.addEventListener('load', function() {
//   document.querySelector('#loader').style.display = 'none';
// });
// scroll to top
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if (scrolled >= 200) {
  document.body.classList.add('scrollable');
  } else {
  document.body.classList.remove('scrollable');
  }
  });
//For Smooth Scrolling

const navLinks = document.querySelectorAll('.custom-nav-item');
const nav = document.querySelector('nav');
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor link behavior
    const targetSection = document.getElementById(this.hash.substring(1));

    // Enhanced smooth scrolling with optional offset for navbar height
    if (window.innerWidth <= 768) { // Adjust the width as needed for your mobile breakpoint
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: targetSection.offsetTop - (nav.offsetHeight + 20),
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the height of the navbar element
  var navbarHeight = document.querySelector('.navbar').offsetHeight;

  // Check if screen size is below 426px
  if (window.innerWidth < 768) {
    // Set padding-top of the landing element based on navbar height
    var landingElement = document.querySelector('.landing');
    landingElement.style.paddingTop = navbarHeight + 'px';
  }
});


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// For Navbar fading

$(document).ready(function () {
  $('.navbar-nav a').on('click', function () {

    if ($('.navbar-collapse').hasClass('show')) {
      $('.navbar-collapse').removeClass('show');
      $('#MyCheckbox').prop('checked', false);
    }
  });
});


//For Contact Email

const form = document.querySelector('#contactfrm');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {

  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}
  <br> Subject: ${subject.value}<br> Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "abhijiths2907@gmail.com",
    Password: "CDAD1D37D53E7E4FC1F1A71C85C37D65D011",
    To: 'abhijiths2907@gmail.com',
    From: "abhijiths2907@gmail.com",
    Subject: "hgfhtfghd",
    Body: bodyMessage
  }).then(
   
    message => {
      if(message == "OK"){
        Swal.fire({
          title: "Success!",
          text: "Message Send Successfully!",
          icon: "success"
        });
      }
    }
  );
}

// form.addEventListener("submit", (e) => {
//   alert("ok")
//   e.preventDefault();

//   sendEmail();

// });






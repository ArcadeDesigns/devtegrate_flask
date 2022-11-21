
// JavaScript Code for Navbar Responsiveness and Other Functionalities //
  
  // Navbar Section //
    const menuBtn = document.querySelector('.menu-Btn');
    const navigation = document.querySelector('.navigation');

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navigation.classList.toggle('active');
    });

    const btns = document.querySelectorAll('.nav_btn');
    const slides = document.querySelectorAll('.video_slide');
    const contents = document.querySelectorAll('.content');

    var sliderNav = function (manual) {
      btns.forEach((btn) => {
        btn.classList.remove('active');
      });

      slides.forEach((slides) => {
        slides.classList.remove('active');
      });

      contents.forEach((contents) => {
        contents.classList.remove('active');
      });


      btns[manual].classList.add('active');
      slides[manual].classList.add('active');
      contents[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        sliderNav(i);
      });
    });



    // Navbar Header Scroller Section //
    let header = document.querySelector("header");
    window.addEventListener("scroll", () => {
      header.classList.toggle("shadow", window.scrollY > 0);
    });



    // Animation Scroll Section //
    AOS.init();



    // Swiper Scroll Section //
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Swiper Scroll Section Two //
    var swiper = new Swiper(".container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Email SMPT Function //
    function sendEmail() {
      Email.send({
        Host: "smtp.office365.com",
        Username: "contact@devtegrate.com",
        Password: "Welcome2023@@eva",
        To: "folayemiebire@gmail.com",
        From: document.getElementById("email").value,
        Subject: 'You Have a New Schelduled Conference',
        Body:
          'Name:' +
          document.getElementById('name').value +
          '<br> Company:' +
          document.getElementById('company').value +
          '<br> Email:' +
          document.getElementById('email').value +
          "<br> Message:" +
          document.getElementById('message').value,
      }).then((message) => alert('Message Successfully Sent'));
    }

    // Subscription Functions //
    function popUpMessage() {
      alert('Thank You for Subscribing to Our Services and Update, Click "Okay" to Schedule of Video Conference with Us for Consultation.');
    }
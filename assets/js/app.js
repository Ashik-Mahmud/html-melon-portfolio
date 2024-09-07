$(document).ready(function () {

    $(".testimonial-slider").owlCarousel({
        items: 2,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            }
        }


    })


    //  Validate Form 
    $("#contact-form").validate();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $("#header").addClass("header-shadow")
        } else {
            $("#header").removeClass("header-shadow")
        }

        if ($(this).scrollTop() > 150) {
            $(".scrolltop").css({
                bottom: '45px'
            });
        } else {
            $(".scrolltop").css({
                bottom: '-50px'
            });
        }



    })
    

 
    $(".scrolltop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    })


//  var localData = localStorage.setItem("theme","dark-mode");


  var getTheme = localStorage.getItem("theme");

  if(getTheme=="darkmode"){
      $("body").addClass("darkmode");
  }else{
      $("body").removeClass("darkmode");
  }

 if(getTheme==null){
     localStorage.setItem("theme","lightmode");
 }

    $(".darkMode-btn").click(function (e) {
        e.preventDefault();
        if($("body").hasClass("darkmode")){
            localStorage.setItem("theme","");
            $("body").removeClass("darkmode");
        }else{
            localStorage.setItem("theme","darkmode");
            $("body").addClass("darkmode");

        }
    })




})

var projectBtn = document.querySelectorAll(".project-btn");
var modal = document.querySelector(".modal");
var modalBody = document.querySelector(".modal-content");
projectBtn.forEach(function (e) {
    e.addEventListener("click", function () {
        modal.classList.add("show-modal");
        modalBody.classList.add("show-modalBody");
    })
})

document.querySelector(".close-modal").onclick = function () {
    modal.classList.remove("show-modal");
    modalBody.classList.remove("show-modalBody");
};



var gumshoe = new Gumshoe("nav a");

document.querySelector(".humberger").onclick = function(){
    document.querySelector(".primary-menu").classList.toggle("show-nav");
    document.querySelector(".humberger").classList.toggle("active-humberger");
}

document.querySelectorAll('.primary-menu a').forEach(e => e.addEventListener('click',function(){
    document.querySelector(".primary-menu").classList.remove("show-nav");
    document.querySelector(".humberger").classList.remove("active-humberger");

}))

    // Reveal animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '90px',
        duration: 2000,
        reset: true
    });
    ScrollReveal().reveal('.social-links, .single-goal, .single-experience, .single-service, .single-project, .form-row,.hero-img-wrapper', { interval: 100 });
    ScrollReveal().reveal('.sub-heading');
    ScrollReveal().reveal('.col-right')
    ScrollReveal().reveal('.heading', { delay: 100 });
    ScrollReveal().reveal('.heading2', { delay: 200 });
    ScrollReveal().reveal('.paragraph', { delay: 300 });
    ScrollReveal().reveal('.btn-blk', { delay: 400 });
    // About
    ScrollReveal().reveal('.about-text');
    ScrollReveal().reveal('.about-heading');
    ScrollReveal().reveal('.about-image', { delay: 100 });
    ScrollReveal().reveal('.about3', { delay: 200 });
    ScrollReveal().reveal('.about-btn-blk', { delay: 300 });
    // CTA
    ScrollReveal().reveal('.cta-wrapper', { delay: 100 })
    ScrollReveal().reveal('.view-btn', { delay: 200 });
    // testmonail
    ScrollReveal().reveal('.testimonial-content');
    // Contact form
    ScrollReveal().reveal('.contact-content');
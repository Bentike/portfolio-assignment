let hamburger = document.getElementById("hamburger");
let mobileNav = document.getElementById("mobile");
hamburger.addEventListener("click", function(){
    mobileNav.classList.toggle("hidden");
});

$('a').click(function (e) {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
});
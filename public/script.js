let hamburger = document.getElementById("hamburger");
let mobileNav = document.getElementById("mobile");
hamburger.addEventListener("click", function(){
    mobileNav.classList.toggle("hidden");
})
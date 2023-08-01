let hamburger = document.getElementById("hamburger");
let mobileNav = document.getElementById("mobile");
hamburger.addEventListener("click", function(){
    console.log(mobileNav.classList);
    mobileNav.classList.toggle("hidden");
})
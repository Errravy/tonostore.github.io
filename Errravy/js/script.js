let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");

menu.onclick = () => {
    navbar.classList.toggle("active");
    menu.classList.toggle("move");
    bell.classList.remove("active");
    download.classList.remove("active");
}

let bell = document.querySelector(".notification");
document.querySelector("#bell-icon").onclick = () =>{
    bell.classList.toggle("active");
    download.classList.remove("active");
}
let download = document.querySelector(".downloadgame");
document.querySelector("#download-icon").onclick = () =>{
    download.classList.toggle("active");
    bell.classList.remove("active");
}


var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:5000,
        disableoninteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
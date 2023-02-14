const nav = document.getElementById("Nav");
function openNav() {
    nav.style.height = "100%";
}
function closeNav() {
    nav.style.height = "0%";
}



// let swiper = new Swiper(".swiper", {
//     direction: "horizontal",
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       hide: true,
//     },
// });




function swapDiv(id) {
    var first = document.getElementById("div-1");
    var second = document.getElementById("div-2"),
        third = document.getElementById("div-3"),
        fourth = document.getElementById("div-4"),
        fifth = document.getElementById("div-5");
    if (id == 1) {
        first.after(second, third, fourth, fifth);
    } else if (id == 2) {
        second.after(third, fourth, fifth, first);
    } else if (id == 3) {
        third.after(fourth, fifth, first, second);
    } else if (id == 4) {
        fourth.after(fifth, first, second, third);
    } else if (id == 5) {
        fifth.after(first, second, third, fourth);
    }
}





const bdy = document.querySelector("#body");

window.addEventListener("scroll",  function() {
    const arrowUp = document.querySelector(".flesh-up-box");
    const hauteur = window.scrollY;
    if (hauteur > 1200) {
        arrowUp.classList.add("ds-blk");
    } else {
        arrowUp.classList.remove("ds-blk");
    }
})
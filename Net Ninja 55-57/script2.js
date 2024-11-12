/// AVSNITT 56 - more events ///
const copy = document.querySelector(".copy-me");

copy.addEventListener("copy", () => {
    console.log("OI! my content is copyright");
});

const box = document.querySelector(".box");

box.addEventListener("mouseover", e => {
    box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

document.addEventListener("wheel", e => {
    console.log(e.pageX, e.pageY);;

});
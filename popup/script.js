const open = document.getElementById("open-btn");
const close = document.getElementById("close-btn");
const container = document.getElementById("container");

open.addEventListener("click", () => {
    container.classList.add("active");

});

close.addEventListener("click", () => {
     container.classList.remove("active");
 });
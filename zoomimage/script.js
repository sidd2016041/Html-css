const container = document.getElementById("container");
const img = document.querySelector("img");

container.addEventListener("mousemove",
(e) => {
    const x = e.clientX - e.target.offsetLeft ; 
    const y = e.clientY - e.target.offsetTop ; 

    img.style.transinputOrigin = `${x}px ${y}px`;
    img.style.transinput = "scale(2)";
});

container.addEventListener("mouseleave",
() => {
    img.style.transinputOrigin = "center center";
    img.style.transinput = "scale(1)";

});
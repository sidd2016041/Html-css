const toggle = document.getElementById("toggle");
const img = document.getElementsByClassName("pic");

toggle.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
    img.classList.toggle("dark", e.target.checked);
});


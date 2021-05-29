const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");

let idx = 0;

function run() {
    idx++;

    if( idx > img.length-1){
        idx = 0;
    }
    
    imgs.style.transinput = `translateX(${-idx*700}px)`;

}
setInterval(run, 2000);
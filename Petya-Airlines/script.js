function nextPage(page){

document
.querySelectorAll(".page")
.forEach(p => p.classList.remove("active"));

document
.getElementById("page" + page)
.classList.add("active");

}

const noBtn =
document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener(
"mouseover",
()=>{

const x =
Math.random()*400;

const y =
Math.random()*300;

noBtn.style.position="absolute";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

}
);

}

function nextPage(page){

document
.querySelectorAll(".page")
.forEach(p => p.classList.remove("active"));

const target =
document.getElementById("page" + page);

if(target){
target.classList.add("active");
}

if(page === 12){

if(typeof confetti === "function"){

confetti({
particleCount: 180,
spread: 120,
origin: { y: 0.6 }
});

}

const music =
document.getElementById("birthdayMusic");

if(music){

music.play().catch(() => {
console.log("Autoplay blocked");
});

}

}

}

const noBtn =
document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener(
"mouseover",
() => {

const x =
Math.random() * (window.innerWidth - 250);

const y =
Math.random() * (window.innerHeight - 80);

noBtn.style.position = "fixed";
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

}
);

}

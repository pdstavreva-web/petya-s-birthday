alert("SCRIPT LOADED");

function nextPage(page){

document
.querySelectorAll(".page")
.forEach(p => p.classList.remove("active"));

document
.getElementById("page" + page)
.classList.add("active");

}

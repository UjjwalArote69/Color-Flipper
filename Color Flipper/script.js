const mainPage = document.querySelector(".main");

const redBtn = document.querySelector("#redBtn");
const blueBtn = document.querySelector("#blueBtn");
const greenBtn = document.querySelector("#greenBtn");

redBtn.addEventListener("click",function() {
    mainPage.style.backgroundColor = "red";
});

blueBtn.addEventListener("click", function() {
    mainPage.style.backgroundColor = "blue";
})

greenBtn.addEventListener("click", function() {
    mainPage.style.backgroundColor = "green";
})
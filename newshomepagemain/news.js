const ham = document.querySelector("#ham");
const xmark = document.querySelector("#xmark");
const nav = document.querySelector(".nav__container")
const body = document.querySelector("body");

ham.addEventListener("click", function () {
    ham.style.cssText = 'display:none !important';
    nav.style.display = "block";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
});

xmark.addEventListener("click", function () {
    ham.style.cssText = 'display:block !important';
    nav.style.display = "none";
    body.style.backgroundColor = `${getComputedStyle(document.body).getPropertyValue('--off-white')}`;
})
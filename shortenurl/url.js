const form = document.querySelector("#url-form");
const urlOrig = document.querySelector("#url-orig");
const linkContainer = document.querySelector(".link-container");
const linkOrig = document.querySelector(".link-container__orig-text");
const linkNew = document.querySelector(".link-container__new-text");
const btnCopy = document.querySelector(".link-container__btn-copy");

async function shortlink(url) {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, { method: "POST" });
    const shortenLink = await response.json();
    console.log(shortenLink.result.full_short_link);
    linkContainer.style.display = "block";
    linkOrig.innerText = url
    linkNew.innerText = shortenLink.result.full_short_link;
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    shortlink(urlOrig.value);
})

btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(linkNew.innerText);
    btnCopy.innerText = "Copied!";
    btnCopy.style.cssText = "background-color: hsl(257, 27%, 26%) !important";
})

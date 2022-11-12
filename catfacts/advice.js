const button = document.querySelector(".container__iconbox");
const text = document.querySelector(".container__text");


async function getAdvice() {

    const res = await fetch("https://catfact.ninja/fact?max_length=64");
    const data = await res.json();
    text.innerText = `"${data.fact}"`;
}


button.addEventListener("click", () => getAdvice());


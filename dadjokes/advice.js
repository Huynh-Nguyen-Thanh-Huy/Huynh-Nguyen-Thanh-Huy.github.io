const button = document.querySelector(".container__iconbox");
const text = document.querySelector(".container__text");


async function getAdvice() {

    const res = await fetch("https://icanhazdadjoke.com/", { headers: { "Accept": "application/json" } });
    const data = await res.json();
    console.log(data);
    text.innerText = `"${data.joke}"`;
}


button.addEventListener("click", () => getAdvice());


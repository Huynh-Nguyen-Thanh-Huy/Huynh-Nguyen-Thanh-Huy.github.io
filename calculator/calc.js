const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const dot = document.querySelector("#dot");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");

const del = document.querySelector("#del");
const reset = document.querySelector("#reset");
const equal = document.querySelector("#equal");

const show = document.querySelector("#show");

//Theme buttons
const theme1 = document.querySelector("#theme1");
const theme2 = document.querySelector("#theme2");
const theme3 = document.querySelector("#theme3");

let res = "";
let dotted = false;
let state = "none";
let isPrepareCacl = false;
let var1 = 0;
let var2 = 0;

const prepareCacl = () => {
    if (state !== "none" && !isPrepareCacl) {
        var1 = parseFloat(show.innerText);
        show.innerText = "";
        isPrepareCacl = true;
    }
}

function addNumToShow(num) {
    prepareCacl();
    if (show.innerText === "infinity") show.innerText = "0";

    if (show.innerText !== "0") {
        if (show.innerText.length >= 16) {
            return;
        }
        show.innerText = show.innerText + this.firstChild.innerText;
    } else {
        if (this.firstChild.innerText === "0") return;
        show.innerText = this.firstChild.innerText;
    }
}

[zero, one, two, three, four, five, six, seven, eight, nine].forEach(function (elem) {
    elem.addEventListener("click", addNumToShow);
})

del.addEventListener("click", () => {
    show.innerText = show.innerText.slice(0, -1);
    if (show.innerText === "") show.innerText = "0";
    if (!show.innerText.includes(".")) dotted = false;
})

reset.addEventListener("click", () => {
    show.innerText = "0";
})

dot.addEventListener("click", () => {
    if (show.innerText === "infinity") return;
    if (dotted === false) {
        show.innerText = show.innerText + ".";
        dotted = true;
    }
})

const solve = () => {
    var2 = parseFloat(show.innerText);
    switch (state) {
        case "plus":
            show.innerText = `${var1 + var2}`;
            break;
        case "minus":
            show.innerText = `${var1 - var2}`;
            break;
        case "mul":
            show.innerText = `${var1 * var2}`;
            break;
        case "div":
            if (var2 === 0) {
                show.innerText = "infinity";
                break;
            }
            show.innerText = `${var1 / var2}`;
            break;
    }

    if (show.innerText.length > 16) {
        if (show.innerText.indexOf(".") > 16 || show.innerText.indexOf(".") === -1)
            show.innerText = "9999999999999999";
    }

    state = "none";
    isPrepareCacl = false;
}

plus.addEventListener("click", () => {
    if (state !== "none") solve();
    if (show.innerText === "infinity") return;
    state = "plus";
})

minus.addEventListener("click", () => {
    if (state !== "none") solve();
    if (show.innerText === "infinity") return;
    state = "minus";
})

div.addEventListener("click", () => {
    if (state !== "none") solve();
    if (show.innerText === "infinity") return;
    state = "div";
})

mul.addEventListener("click", () => {
    if (state !== "none") solve();
    if (show.innerText === "infinity") return;
    state = "mul";
})

equal.addEventListener("click", () => {
    solve();
})

//THEME CHANGING BUTTONS 

const theme = {
    theme1: {
        mainBg: "hsl(222, 26%, 31%)",
        keypadBg: "hsl(223, 31%, 20%)",
        screenBg: "hsl(224, 36%, 15%)",
        keyBg: "hsl(30, 25%, 89%)",
        keyBgHover: "hsl(30, 25%, 100%)",
        keyShadow: "hsl(28, 16%, 65%)",
        keyBgEqual: "hsl(6, 63%, 50%)",
        keyBgEqualHover: "hsl(6, 63%, 60%)",
        keyShadowEqual: "hsl(6, 70%, 34%)",
        keyBgReset: "hsl(225, 21%, 49%)",
        keyBgResetHover: "hsl(225, 21%, 60%)",
        keyShadowReset: "hsl(224, 28%, 35%)",
        textDown: "hsl(221, 14%, 31%)",
        textUp: "hsl(0, 0%, 100%)",
        textEqual: "hsl(0, 0%, 100%)"
    },
    theme2: {
        mainBg: " hsl(0, 0%, 90%)",
        keypadBg: "hsl(0, 5%, 81%)",
        screenBg: "hsl(0, 0%, 93%)",
        keyBg: "hsl(45, 7%, 89%)",
        keyBgHover: "hsl(45, 7%, 100%)",
        keyShadow: "hsl(35, 11%, 61%)",
        keyBgEqual: "hsl(25, 98%, 40%)",
        keyBgEqualHover: "hsl(25, 98%, 50%)",
        keyShadowEqual: "hsl(25, 99%, 27%)",
        keyBgReset: "hsl(185, 42%, 37%)",
        keyBgResetHover: "hsl(185, 42%, 47%)",
        keyShadowReset: "hsl(185, 58%, 25%)",
        textDown: "hsl(60, 10%, 19%)",
        textUp: "hsl(60, 10%, 19%)",
        textEqual: "hsl(0, 0%, 100%)"
    },
    theme3: {
        mainBg: "hsl(268, 75%, 9%)",
        keypadBg: "hsl(268, 71%, 12%)",
        screenBg: "hsl(268, 71%, 12%)",
        keyBg: "hsl(268, 47%, 21%)",
        keyBgHover: "hsl(268, 47%, 31%)",
        keyShadow: "hsl(290, 70%, 36%)",
        keyBgEqual: "hsl(176, 100%, 44%)",
        keyBgEqualHover: "hsl(176, 100%, 54%)",
        keyShadowEqual: "hsl(177, 92%, 70%)",
        keyBgReset: "hsl(281, 89%, 26%)",
        keyBgResetHover: "hsl(281, 89%, 36%)",
        keyShadowReset: "hsl(285, 91%, 52%)",
        textDown: "hsl(52, 100%, 62%)",
        textUp: "hsl(52, 100%, 62%)",
        textEqual: "hsl(198, 20%, 13%)"
    }
};


function changeThemeBtn(themeSelect) {
    theme1.classList.remove("active");
    theme2.classList.remove("active");
    theme3.classList.remove("active");
    themeSelect.classList.add("active");
}

function changeThemeColorExecute(theme) {
    // mainBg:
    document.querySelector("body").style.cssText = `background-color: ${theme.mainBg} !important`;

    // keypadBg:
    document.querySelector(".key-container").style.backgroundColor = theme.keypadBg;

    // screenBg: 
    document.querySelector("#screen").style.backgroundColor = theme.screenBg;

    // keyBg: 
    document.querySelectorAll(".btn-con__btn").forEach(btn => btn.style.backgroundColor = theme.keyBg)


    // keyShadow: 
    document.querySelectorAll(".btn-con__btn").forEach(shadow => shadow.style.boxShadow = `0px 4px 0px 0px ${theme.keyShadow}`);

    // keyBgEqual: 
    document.querySelector("#equal").style.backgroundColor = theme.keyBgEqual;

    // keyShadowEqual: 
    document.querySelector("#equal").style.boxShadow = `0px 4px 0px 0px ${theme.keyShadowEqual}`;

    // keyBgReset: 
    document.querySelector("#reset").style.backgroundColor = theme.keyBgReset;
    document.querySelector("#del").style.backgroundColor = theme.keyBgReset;

    // keyShadowReset: 
    document.querySelector("#reset").style.boxShadow = `0px 4px 0px 0px ${theme.keyShadowReset}`;
    document.querySelector("#equal").style.boxShadow = `0px 4px 0px 0px ${theme.keyShadowReset}`;

    // textDark: 
    document.querySelector(":root").style.setProperty('--down-text', `${theme.textDown}`);

    // textLight: 
    document.querySelector(":root").style.setProperty('--up-text', `${theme.textUp}`);

    //textEqual
    document.querySelector(":root").style.setProperty('--equal-text', `${theme.textEqual}`);

}

function changeThemeColor(themeId) {
    switch (themeId) {
        case "theme1":
            changeThemeColorExecute(theme.theme1);
            break;
        case "theme2":
            changeThemeColorExecute(theme.theme2);
            break;
        case "theme3":
            changeThemeColorExecute(theme.theme3);
            break;
    }
}


[theme1, theme2, theme3].forEach(function (elem) {
    elem.addEventListener("click", function () {
        changeThemeBtn(this);
        changeThemeColor(this.id);
    })
})

// [zero, one, two, three, four, five, six, seven, eight, nine].forEach(function (elem) {
//     elem.addEventListener("mouseover", function () {
//         console.log(this);
//         this.style.cssText = "background-color: hsl(6, 63%, 60%) !important ";
//     });
// })

function mouseenterColorExecute(themeSelect, btn) {
    btn.style.backgroundColor = themeSelect.keyBgHover;
}


function mouseenterColor() {
    if (theme1.classList.contains("active")) {
        mouseenterColorExecute(theme.theme1, this);
        return;
    }

    if (theme2.classList.contains("active")) {
        mouseenterColorExecute(theme.theme2, this);
        return;
    }

    if (theme3.classList.contains("active")) {
        mouseenterColorExecute(theme.theme3, this);
        return;
    }
}

[dot, plus, minus, mul, div, zero, one, two, three, four, five, six, seven, eight, nine].forEach(function (elem) {
    elem.addEventListener("mouseenter", mouseenterColor);
})

function mouseleaveColorExecute(themeSelect, btn) {
    btn.style.backgroundColor = themeSelect.keyBg;
}


function mouseleaveColor() {
    if (theme1.classList.contains("active")) {
        mouseleaveColorExecute(theme.theme1, this);
        return;
    }

    if (theme2.classList.contains("active")) {
        mouseleaveColorExecute(theme.theme2, this);
        return;
    }

    if (theme3.classList.contains("active")) {
        mouseleaveColorExecute(theme.theme3, this);
        return;
    }
}


[dot, plus, minus, mul, div, zero, one, two, three, four, five, six, seven, eight, nine].forEach(function (elem) {
    elem.addEventListener("mouseleave", mouseleaveColor);
})

function mouseenterResetColorExecute(themeSelect, btn) {
    btn.style.backgroundColor = themeSelect.keyBgResetHover;
}

function mouseenterResetColor() {
    if (theme1.classList.contains("active")) {
        mouseenterResetColorExecute(theme.theme1, this);
        return;
    }

    if (theme2.classList.contains("active")) {
        mouseenterResetColorExecute(theme.theme2, this);
        return;
    }

    if (theme3.classList.contains("active")) {
        mouseenterResetColorExecute(theme.theme3, this);
        return;
    }
}


[del, reset].forEach(function (elem) {
    elem.addEventListener("mouseenter", mouseenterResetColor);
})

function mouseleaveResetColorExecute(themeSelect, btn) {
    btn.style.backgroundColor = themeSelect.keyBgReset;
}

function mouseleaveResetColor() {
    if (theme1.classList.contains("active")) {
        mouseleaveResetColorExecute(theme.theme1, this);
        return;
    }

    if (theme2.classList.contains("active")) {
        mouseleaveResetColorExecute(theme.theme2, this);
        return;
    }

    if (theme3.classList.contains("active")) {
        mouseleaveResetColorExecute(theme.theme3, this);
        return;
    }
}


[del, reset].forEach(function (elem) {
    elem.addEventListener("mouseleave", mouseleaveResetColor);
})

//Equal

function mouseenterEqualColorExecute(themeSelect, btn) {
    btn.style.backgroundColor = themeSelect.keyBgEqualHover;
}

function mouseenterEqualColor() {
    if (theme1.classList.contains("active")) {
        mouseenterEqualColorExecute(theme.theme1, this);
        return;
    }

    if (theme2.classList.contains("active")) {
        mouseenterEqualColorExecute(theme.theme2, this);
        return;
    }

    if (theme3.classList.contains("active")) {
        mouseenterEqualColorExecute(theme.theme3, this);
        return;
    }
}

equal.addEventListener("mouseenter", mouseenterEqualColor);


function mouseleaveEqualColorExecute(themeSelect, btn) {
    btn.style.backgroundColor = themeSelect.keyBgEqual;
}

function mouseleaveEqualColor() {
    if (theme1.classList.contains("active")) {
        mouseleaveEqualColorExecute(theme.theme1, this);
        return;
    }

    if (theme2.classList.contains("active")) {
        mouseleaveEqualColorExecute(theme.theme2, this);
        return;
    }

    if (theme3.classList.contains("active")) {
        mouseleaveEqualColorExecute(theme.theme3, this);
        return;
    }
}

equal.addEventListener("mouseleave", mouseleaveEqualColor);




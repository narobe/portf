const input = document.querySelector('.input');
const prev = document.querySelector('.prev-input');
const output = document.querySelector('.output');
const toFar = document.querySelector('.farheneit');
const toCel = document.querySelector('.celcius');
const clearBtn = document.querySelector('.clear');
const inputClear = document.querySelector('.input-clear');

toFar.addEventListener('click', calcFar)
toCel.addEventListener('click', calcCel)
clearBtn.addEventListener('click', clear)
inputClear.addEventListener('click', inputClean)


function calcFar() {
    const inputValue = input.value;
    const formula1 = (inputValue * (9 / 5)) + 32;
    output.innerHTML = `${Math.round(formula1)} <span>Far</span>`;

}


function calcCel() {
    const inputValue = input.value;
    const formula2 = (inputValue - 32) * (5 / 9);
    output.innerHTML = `${Math.round(formula2)} <span>Cel</span>`;

}


function clear() {
    const result = output.innerHTML;
    prev.style.display = "block";
    prev.innerHTML = result;
    output.innerHTML = "00";
    input.value = "";
}

function inputClean() {
    input.value = "";
}

function inputClearBtnState() {
    const inputValue = input.value;
    if (inputValue === "") {
        console.log("Alright")
    } else {
        console.log("Offright")
    }
}
inputClearBtnState();
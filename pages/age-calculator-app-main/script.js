const dayInput = document.querySelector(".day-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");

const dayLabel = document.getElementById("day-label")
const monthLabel = document.getElementById("month-label")
const yearLabel = document.getElementById("year-label")

const dayOutput = document.querySelector(".day .value");
const monthOutput = document.querySelector(".month .value");
const yearOutput = document.querySelector(".year .value");

const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");

const btn = document.getElementById("btn");

isValid = true;

const currentYear = new Date().getUTCFullYear()

dayInput.addEventListener("input", dayErrorX);
dayInput.addEventListener("input", monthTrickyError);
monthInput.addEventListener("input", monthErrorX);
monthInput.addEventListener("input", monthTrickyError);
yearInput.addEventListener("input", yearErrorX);

function dayErrorX() {
    if (+dayInput.value > 31) {
        dayInput.style.border = "1px solid red"
        isValid = false;
        dayLabel.style.color = "red";
        dayLabel.style.opacity = "0.9";
        dayError.innerHTML = "Must Be a Valid Day";
        return;
    } else if (+dayInput.value <= 0) {
        dayInput.style.border = "1px solid red"
        isValid = false;
        dayLabel.style.color = "red";
        dayLabel.style.opacity = "0.9";
        dayError.innerHTML = "This Field Is Required";
        return;
    } else {
        isValid = true;
        dayInput.style.border = "1px solid purple"
        dayError.innerHTML = " ";
        dayLabel.style.color = "black";
    }
}

function monthErrorX() {
    if (+monthInput.value > 12) {
        isValid = false;
        monthInput.style.border = "1px solid red"
        monthLabel.style.color = "red";
        monthLabel.style.opacity = "0.9";
        monthError.innerHTML = "Must Be a Valid Month";

        return;
    } else if (+monthInput.value <= 0) {
        isValid = false;
        monthInput.style.border = "1px solid red"
        monthLabel.style.color = "red";
        monthLabel.style.opacity = "0.9";
        monthError.innerHTML = "This Field Is Required";
        return;
    } else {
        isValid = true;
        monthInput.style.border = "1px solid purple"
        monthError.innerHTML = " ";
        monthLabel.style.color = "black";
        btn.addEventListener("click", calculateAge)
    }
}

function yearErrorX() {
    if (+yearInput.value > currentYear) {
        isValid = false;
        yearLabel.style.color = "red";
        yearLabel.style.opacity = "0.9";
        yearError.innerHTML = "must be in the past";
        return;
    }
    else if (+yearInput.value <= 0) {
        isValid = false;
        yearInput.style.border = "1px solid red"
        yearLabel.style.color = "red";
        yearLabel.style.opacity = "0.9";
        yearError.innerHTML = "This Field Is Required";
        return;
    } else {
        isValid = true;
        yearInput.style.border = "1px solid purple"
        yearError.innerHTML = " ";
        yearLabel.style.color = "black";
    }
}


function calculateAge() {
    if (isValid) {
        console.log(isValid)
        const birthDay = `${monthInput.value} ${dayInput.value} ${yearInput.value}`

        const DoB = new Date(birthDay);
        const baDx = new Date() - DoB;
        const baDxx = new Date(baDx);
        if (monthInput.value || dayInput.value || yearInput.value !== "") {
            yearOutput.textContent = baDxx.getUTCFullYear() - 1970 + " ";
            monthOutput.textContent = baDxx.getUTCMonth() + " ";
            dayOutput.textContent = baDxx.getUTCDate() + " ";
        }
        else {
            dayErrorX();
            monthErrorX();
            yearErrorX();
            yearOutput.textContent = "- - ";
            monthOutput.textContent = "- - ";
            dayOutput.textContent = "- - ";
        }

    }
}

function monthTrickyError() {
    if (+monthInput.value === 4) {
        isValid = false;
        trickyError()
    } else if (+monthInput.value === 6) {
        trickyError()
        return;
    } else if (+monthInput.value === 11) {
        trickyError()
    } else if (+monthInput.value === 2) {
        feburaryTrickyError()
    } else {
        dayErrorX()
    }

}

function trickyError() {
    if (+dayInput.value > 30) {
        isValid = false;
        dayInput.style.border = "1px solid red"
        dayLabel.style.color = "red";
        dayLabel.style.opacity = "0.9";
        dayError.innerHTML = "Must Be a Valid Day";
        return;
    } else if (+dayInput.value <= 0) {
        dayInput.style.border = "1px solid red"
        isValid = false;
        dayLabel.style.color = "red";
        dayLabel.style.opacity = "0.9";
        dayError.innerHTML = "This Field Is Required";
        return;
    } else {
        dayInput.style.border = "1px solid purple"
        dayError.innerHTML = " ";
        dayLabel.style.color = "black";
    }
}
function feburaryTrickyError() {
    if (+dayInput.value > 28) {
        isValid = false;
        dayInput.style.border = "1px solid red"
        dayLabel.style.color = "red";
        dayLabel.style.opacity = "0.9";
        dayError.innerHTML = "Must Be a Valid Day";
        return;
    } else if (+dayInput.value <= 0) {
        dayInput.style.border = "1px solid red"
        isValid = false;
        dayLabel.style.color = "red";
        dayLabel.style.opacity = "0.9";
        dayError.innerHTML = "This Field Is Required";
        return;
    } else {
        dayInput.style.border = "1px solid purple"
        dayError.innerHTML = " ";
        dayLabel.style.color = "black";
    }
}
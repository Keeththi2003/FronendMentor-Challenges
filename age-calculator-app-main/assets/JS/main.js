const inputDay = document.getElementById("b-day");
const inputMonth = document.getElementById("b-month");
const inputYear = document.getElementById("b-year");
const outputDay = document.getElementById("a-day");
const outputMonth = document.getElementById("a-month");
const outputYear = document.getElementById("a-year");
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", calculate);



function calculate() {
    validateDate();
    validateMonth();
    validateYear();
    const Day1 = inputDay.value;
    const Month1 = inputMonth.value;
    const Year1 = inputYear.value;
    const Birthday = new Date(Year1, Month1 - 1, Day1)

    //Age Calcution
    let Y = new Date().getFullYear() - Birthday.getFullYear();
    let M = new Date().getMonth() - Birthday.getMonth();
    let D = new Date().getDate() - Birthday.getDate();


    if (D < 0) {
        M -= 1;
        D += 30;
    }

    if (M < 0) {
        Y -= 1;
        M += 12;
    }

    outputDay.innerHTML = D;
    outputMonth.innerHTML = M;
    outputYear.innerHTML = Y;
}
inputDay.addEventListener("blur", validateDate);
inputMonth.addEventListener("blur", validateMonth);
inputYear.addEventListener("blur", validateYear);


//Validate Date
function validateDate() {
    if (inputDay.value == '') {
        document.getElementById("error-day").innerHTML = "This filed is required";
        inputDay.style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("dText").style.color = "hsl(0, 100%, 67%)";

    }
    else if (inputDay.value > getNoOfDays(inputYear.value, inputMonth.value) || inputDay.valu < 1) {
        document.getElementById("error-day").innerHTML = "Must be valid day";
        inputDay.style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("dText").style.color = "hsl(0, 100%, 67%)";


    }
    else {
        document.getElementById("error-day").innerHTML = null;
        inputDay.style.borderColor = "hsl(0, 0%, 86%)";
        document.getElementById("dText").style.color = "hsl(0, 1%, 44%)";

    }
}

//Validate Month
function validateMonth() {
    if (inputMonth.value == '') {
        document.getElementById("error-month").innerHTML = "This field is required";
        inputMonth.style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("mText").style.color = "hsl(0, 100%, 67%)";

    }
    else if (inputMonth.value > 12 || inputMonth.value < 1) {
        document.getElementById("error-month").innerHTML = "Must be valid Month";
        inputMonth.style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("mText").style.color = "hsl(0, 100%, 67%)";

    }
    else {
        document.getElementById("error-month").innerHTML = null;
        inputMonth.style.borderColor = "hsl(0, 0%, 86%)";
        document.getElementById("mText").style.color = "hsl(0, 1%, 44%)";
    }
}

//Validate Year
function validateYear() {
    if (inputYear.value == '') {
        document.getElementById("error-year").innerHTML = "This field is required";
        inputYear.style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("yText").style.color = "hsl(0, 100%, 67%)";

    }
    else if (inputYear.value > new Date().getFullYear()) {
        document.getElementById("error-year").innerHTML = "Must be in the Past";
        inputYear.style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById("yText").style.color = "hsl(0, 100%, 67%)";

    }
    else {
        document.getElementById("error-year").innerHTML = null;
        inputYear.style.borderColor = "hsl(0, 0%, 86%)";
        document.getElementById("yText").style.color = "hsl(0, 1%, 44%)";


    }

}

//Get No of days in particular month
function getNoOfDays(y, m) {
    return new Date(y, m, 0).getDate();
}
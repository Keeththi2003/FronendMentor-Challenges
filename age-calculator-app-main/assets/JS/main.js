const inputDay = document.getElementById("b-day");
const inputMonth = document.getElementById("b-month");
const inputYear = document.getElementById("b-year");
const outputDay = document.getElementById("a-day");
const outputMonth = document.getElementById("a-month");
const outputYear = document.getElementById("a-year");
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", calculate);

function calculate() {
    const Day = inputDay.value;
    const Month = inputMonth.value;
    const Year = inputYear.value;
    const Birthday = new Date(Year, Month - 1, Day)

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


//Validate Date
function validateDate() {
    if ( inputDay.value > 31 || inputDay.value <= 0){
        document.getElementById("error").innerHTML = "Must be valid day"
    }
    
    
    
}

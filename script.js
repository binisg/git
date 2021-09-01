let nmbrs = document.getElementById('number'); // get the 'number' element
nmbrs.textContent = Number(0);

const decrease = document.getElementById('btn1'); // get first button
const reset = document.getElementById('btn2'); // get second button
const increase = document.getElementById('btn3'); // get third button

function increasing() {
    nmbrs.textContent++;
}

function decreasing() {
    nmbrs.textContent--;
}

function reseting() {
    nmbrs.textContent = 0;
}

increase.addEventListener("click", increasing, true);
decrease.addEventListener("click", decreasing, true);
reset.addEventListener("click", reseting, true);
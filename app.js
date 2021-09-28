/** @format */

let count = 0;

const myValue = document.querySelector("#value");
const myBtns = document.querySelectorAll(".btn");

myBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const action = e.currentTarget.classList;
    if (action.contains("decrease")) {
      count--;
    } else if (action.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      myValue.style.color = "green";
    }
    if (count < 0) {
      myValue.style.color = "red";
    }
    if (count === 0) {
      myValue.style.color = "#222";
    }
    myValue.textContent = count;
  });
});

"use strict";

//selectors

const totalParagraph = document.querySelector(".total");
const colaButton = document.querySelector(".cola");
const peanutsButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummiesButton = document.querySelector(".gummies");
let total = 0;

//make money:

const coinForm = document.querySelector(".form");
const coinContainer = document.querySelector(".coin-container");

//Light Bulb
const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");
const lightBulb = document.querySelector(".light-bulb");
const lightButton = document.querySelectorAll(".light-switch");

//
console.dir(totalParagraph);

const updateVendingTotal = (price) => {
  total += price;
  totalParagraph.textContent = `Total $${total}.00`;
};

colaButton.addEventListener("click", () => {
  updateVendingTotal(2);
});

peanutsButton.addEventListener("click", () => {
  updateVendingTotal(3);
});
chocolateButton.addEventListener("click", () => {
  updateVendingTotal(4);
});
gummiesButton.addEventListener("click", () => {
  updateVendingTotal(6);
});

//

coinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //grab data from the user input, check in console.
  const howManyInput = document.querySelector("#howMany").value; //string since we added the".value"
  const typeOfCoinInput = document.querySelector("#type").value;
  console.dir(howManyInput);
  console.dir(typeOfCoinInput);

  ///--------------------------------------------------------
  for (let i = 0; i < howManyInput; i++) {
    const newCoin = document.createElement("div");
    //modify elements
    newCoin.classList.add(typeOfCoinInput, "coin");
    newCoin.textContent = typeOfCoinInput;
    //
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
    ///apend to the page
    coinContainer.append(newCoin);
  }
});

//Light Bulb

onButton.addEventListener("click", () => {
  //lightBulb.classList.add("light");
  lightBulb.style.backgroundColor = "yellow";
  lightBulb.style.color = "black";
});

offButton.addEventListener("click", () => {
  //lightBulb.classList.remove("light");
  lightBulb.style.backgroundColor = "rgb(70,70,70)";
  lightBulb.style.color = "white";
});
toggleButton.addEventListener("click", () => {
  if (lightBulb.style.backgroundColor === "yellow") {
    lightBulb.style.backgroundColor = "rgb(70,70,70)";
    lightBulb.style.color = "white";
  } else {
    lightBulb.style.backgroundColor = "yellow";
    lightBulb.style.color = "black";
  }
});

endButton.addEventListener("click", () => {
  //onButton.setAttribute("disabled", true);
  //offButton.setAttribute("disabled", true);
  lightBulb.remove();
  lightButton.forEach((button) => {
    button.setAttribute("disabled", true);
  });
});

"use strict";

const rates = document.querySelector(".card-rates");
const rateList = document.querySelectorAll("li");
const button = document.querySelector("button");

let rate;
rates.addEventListener("click", (e) => {
  const target = e.target.closest("li");
  if (!target) return;
  rate = target.textContent;
  rateList.forEach((rate) => rate.classList.remove("active"));
  target.classList.add("active");
});

button.addEventListener("click", (e) => {
  document.querySelector(".card").classList.add("hidden");
  document.querySelectorAll(".card")[1].classList.remove("hidden");
  document.querySelector(".card-rate").children[0].textContent = rate + " ";
});

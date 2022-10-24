"use strict";

const allContent = document.querySelectorAll(".item__content");
const allItems = document.querySelectorAll(".item");
const allArrowButtons = document.querySelectorAll(".item__drop-icon");

const activateBtnAnim = (btn) => {
  btn.classList.toggle(`btn--active`);
};

const addClickEvent = (el) => {
  let answer = el.closest("li").querySelector(".item__answer");
  answer.classList.toggle("hidden");

  let questionActive = el.closest("div").querySelector(".item__content");
  questionActive.classList.toggle("item--active");
};

const initializeButtons = () => {
  allArrowButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      activateBtnAnim(btn);
      addClickEvent(btn);
    });
  });
};

const initializeActiveContent = () => {
  allContent.forEach((con) => {
    con.addEventListener("click", function () {
      activateBtnAnim(con.parentNode.querySelector("img"));
      addClickEvent(con);
    });
  });
};

const init = () => {
  initializeButtons();
  initializeActiveContent();
};

init();

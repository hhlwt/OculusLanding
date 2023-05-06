"use strict"

const tabButtons = document.querySelectorAll('.tabs__btn-item');
const tabItems = document.querySelectorAll('.tabs__content-item');

tabButtons.forEach((button) => {
  button.addEventListener('click', setActiveButton);
});

function setActiveButton(event) {
  const currentButton = event.currentTarget;
  const contentId = currentButton.dataset.button;
  const selectedItem = document.querySelector(`#${contentId}`);

  tabButtons.forEach((button) => button.classList.remove('tabs__btn-item--active'));
  tabItems.forEach((item) => item.classList.remove('tabs__content-item--active'));

  currentButton.classList.add('tabs__btn-item--active');
  selectedItem.classList.add('tabs__content-item--active');
}
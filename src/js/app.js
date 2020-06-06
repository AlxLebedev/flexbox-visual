import DrawUI from './UI/DrawUI';
import DescriptionGenerator from './Data/DescriptionGenerator';

const drawUI = new DrawUI();
const descriprionGenerator = new DescriptionGenerator();

let container = null;
let property = null;
let propertyValue = null;
let descriptionElement = null;
let descriptionText = null;
let exampleCssField = null;
let changableElementName = null;
let propertyButtons = null;
let itemButtons = null;

let itemElementIndex = null;
let itemFlexElement = null;

const changeContainerButtons = document.querySelectorAll('.flex-container-button');

changeContainerButtons.forEach((button) => button.addEventListener('click', (event) => {
  container = event.target.closest('.container').lastElementChild;
  property = container.dataset.prop;
  propertyValue = event.target.dataset.value;
  descriptionElement = event.target.closest('.container').nextElementSibling.firstElementChild;
  descriptionText = descriprionGenerator.getDescription(property, propertyValue);
  exampleCssField = event.target.closest('.container').nextElementSibling.lastElementChild;
  changableElementName = event.target.closest('.container').dataset.id;
  propertyButtons = event.target.parentElement.querySelectorAll('.button');

  drawUI.changeActiveButton(propertyButtons, event.target);
  drawUI.changePropertyOfElement(container, property, propertyValue);
  drawUI.changePropretyDescription(descriptionElement, descriptionText);
  drawUI.changeExampleCSS(exampleCssField, changableElementName, property, propertyValue);
}));

const selectFlexItemButtons = document.querySelectorAll('.select-item-button');

selectFlexItemButtons.forEach((button) => button.addEventListener('click', (event) => {
  itemElementIndex = +(event.target.innerText) - 1;
  itemFlexElement = event.target.closest('.container').querySelectorAll('.flex-item')[itemElementIndex];
  itemButtons = event.target.parentElement.querySelectorAll('.select-item-button');
  
  drawUI.changeActiveButton(itemButtons, event.target);
}));

const changeFlexItemPropertyButtons = document.querySelectorAll('.property-item-button');

changeFlexItemPropertyButtons.forEach((button) => button.addEventListener('click', (event) => {
  propertyButtons = event.target.parentElement.querySelectorAll('.button');
  property = event.target.closest('.container').lastElementChild.dataset.prop;
  propertyValue = event.target.dataset.value;

  descriptionElement = event.target.closest('.container').nextElementSibling.firstElementChild;
  descriptionText = descriprionGenerator.getDescription(property, propertyValue);
  exampleCssField = event.target.closest('.container').nextElementSibling.lastElementChild;
  changableElementName = event.target.closest('.container').dataset.id;

  drawUI.changeActiveButton(propertyButtons, event.target);
  drawUI.changePropertyOfElement(itemFlexElement, property, propertyValue);
  drawUI.changePropretyDescription(descriptionElement, descriptionText);
  drawUI.changeExampleCSS(exampleCssField, changableElementName, property, propertyValue);
}));

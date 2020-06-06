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
let currentButtons = null;

const changeContainerButtons = document.querySelectorAll('.flex-container-button');

changeContainerButtons.forEach((button) => button.addEventListener('click', (event) => {
  container = event.target.closest('.container').lastElementChild;
  property = container.dataset.prop;
  propertyValue = event.target.dataset.value;
  descriptionElement = event.target.closest('.container').nextElementSibling.firstElementChild;
  descriptionText = descriprionGenerator.getDescription(property, propertyValue);
  exampleCssField = event.target.closest('.container').nextElementSibling.lastElementChild;
  changableElementName = event.target.closest('.container').dataset.id;
  currentButtons = event.target.parentElement.querySelectorAll('.button');

  drawUI.changeActiveButton(currentButtons, event.target);
  drawUI.changePropertyOfContainer(container, property, propertyValue);
  drawUI.changePropretyDescription(descriptionElement, descriptionText);
  drawUI.changeExampleCSS(exampleCssField, changableElementName, property, propertyValue);
}));

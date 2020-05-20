import DrawUI from './UI/DrawUI';
import DescriptionGenerator from './Data/DescriptionGenerator';

const drawUI = new DrawUI();
const descriprionGenerator = new DescriptionGenerator();

let container = null;
let property = null;
let propertyValue = null;
let descriptionElement = null;
let descriptionText = null;

const flexContainerButtons = document.querySelectorAll('.flex-container-button');

flexContainerButtons.forEach((button) => button.addEventListener('click', (event) => {
  container = event.target.closest('.visual').lastElementChild;
  property = container.id;
  propertyValue = event.target.dataset.id;
  descriptionElement = event.target.closest('.visual').nextElementSibling.firstElementChild;
  descriptionText = descriprionGenerator.getDescription(property, propertyValue);
  drawUI.changePropertyOfContainer(container, property, propertyValue);
  drawUI.changePropretyDescription(descriptionElement, descriptionText);
}));

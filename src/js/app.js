import DrawUI from './UI/DrawUI';
import DescriptionGenerator from './Data/DescriptionGenerator';

const drawUI = new DrawUI();
const descriprionGenerator = new DescriptionGenerator();

const changeContainerPropertyButtons = document.querySelectorAll('.flex-container-button');

changeContainerPropertyButtons.forEach((button) => button.addEventListener('click', (event) => {
  const propertyButtons = event.target.parentElement.querySelectorAll('.button');
  const container = event.target.closest('.container').lastElementChild;
  const containerProperty = container.dataset.prop;
  const containerPropertyValue = event.target.dataset.value;
  const descriptionElement = event.target.closest('.container').nextElementSibling.firstElementChild;
  const descriptionText = descriprionGenerator.getDescription(containerProperty, containerPropertyValue);
  const exampleCssField = event.target.closest('.container').nextElementSibling.lastElementChild;
  const changableElementName = event.target.closest('.container').dataset.id;

  drawUI.changeActivePropertyButton(propertyButtons, event.target);
  drawUI.changePropertyOfElement(container, containerProperty, containerPropertyValue);
  drawUI.changePropretyDescription(descriptionElement, descriptionText);
  drawUI.changeExampleCSS(exampleCssField, changableElementName, containerProperty, containerPropertyValue);
}));

const allFlexItemsSelectionButtons = document.querySelectorAll('.select-item-button');

allFlexItemsSelectionButtons.forEach((button) => button.addEventListener('click', (event) => {
  const currentFlexItemsSelectionButtons = Array.from(event.target.closest('.items-buttons').children);
  const propertiesButtons = Array.from(event.target.parentElement.nextElementSibling.children);
  const flexItems = Array.from(event.target.closest('.container').lastElementChild.children);
  const [ selectedFlexItem ] = flexItems.filter( item => item.innerText === event.target.innerText);
  const [ propertyButtonOfSelectedFlexItem ] = propertiesButtons.filter( button => button.dataset.value === selectedFlexItem.dataset.value);
  const flexItemProperty = event.target.closest('.container').lastElementChild.dataset.prop;
  const flexItemValue = selectedFlexItem.dataset.value;
  
  const descriptionElement = event.target.closest('.container').nextElementSibling.firstElementChild;
  const descriptionText = descriprionGenerator.getDescription(flexItemProperty, flexItemValue);
 
  const exampleCssField = event.target.closest('.container').nextElementSibling.lastElementChild;
  const changableElementName = event.target.closest('.container').dataset.id;

  drawUI.clearActiveButtons(currentFlexItemsSelectionButtons);
  drawUI.setActiveButton(event.target);
  drawUI.changeActivePropertyButton(propertiesButtons, propertyButtonOfSelectedFlexItem);
  drawUI.changePropretyDescription(descriptionElement, descriptionText);
  drawUI.changeExampleCSS(exampleCssField, changableElementName, flexItemProperty, flexItemValue);
}));

const changeFlexItemPropertyButtons = document.querySelectorAll('.property-item-button');

changeFlexItemPropertyButtons.forEach((button) => button.addEventListener('click', (event) => {
  const propertiesButtons = event.target.parentElement.querySelectorAll('.button');
  const flexItemProperty = event.target.closest('.container').lastElementChild.dataset.prop;
  const flexItemValue = event.target.dataset.value;

  const descriptionElement = event.target.closest('.container').nextElementSibling.firstElementChild;
  const descriptionText = descriprionGenerator.getDescription(flexItemProperty, flexItemValue);
  const exampleCssField = event.target.closest('.container').nextElementSibling.lastElementChild;
  const changableElementName = event.target.closest('.container').dataset.id;

  // определяем itemFlexElement по признаку 'active' и устанавливаем ему data-value такой же как у кнопки
  const currentFlexItemsSelectionButtons = Array.from(event.target.closest('.container').firstElementChild.firstElementChild.children);
  const [ activeFlexItemsSelectionButton ] = currentFlexItemsSelectionButtons.filter( element => element.classList.contains('active'));
  const activeFlexItemIndex = +(activeFlexItemsSelectionButton.innerText) - 1;
  const flexItemsElements = event.target.closest('.container').lastElementChild.children;
  const itemFlexElement = flexItemsElements[activeFlexItemIndex];

  itemFlexElement.setAttribute('data-value', event.target.dataset.value);

  drawUI.changeActivePropertyButton(propertiesButtons, event.target);
  drawUI.changePropertyOfElement(itemFlexElement, flexItemProperty, flexItemValue);
  drawUI.changePropretyDescription(descriptionElement, descriptionText);
  drawUI.changeExampleCSS(exampleCssField, changableElementName, flexItemProperty, flexItemValue);
}));

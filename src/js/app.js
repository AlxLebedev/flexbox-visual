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

const inputsUnitsButtons = document.querySelectorAll('.inputs-units-button')

inputsUnitsButtons.forEach((button) => button.addEventListener('click', (event) => {
  const currentInputsUnitsButtons = Array.from(event.target.parentElement.querySelectorAll('.inputs-units-button'));
  drawUI.changeActivePropertyButton(currentInputsUnitsButtons, event.target);

  const flexItemProperty = event.target.closest('.container').lastElementChild.dataset.prop;
  const activeUnit = event.target.innerText;
  const flexItemsElements = Array.from(event.target.closest('.container').lastElementChild.children);
  const flexItemName = event.target.parentElement.previousElementSibling.lastElementChild.dataset.ordinal;
  const [ activeFlexItemElement ] = flexItemsElements.filter( element => element.dataset.ordinal === flexItemName);

  const exampleCssField = event.target.closest('.container').nextElementSibling.lastElementChild;
  const changableElementName = event.target.closest('.container').dataset.id;

  const descriptionElement = event.target.closest('.container').nextElementSibling.firstElementChild;
  const descriptionText = descriprionGenerator.getDescription(flexItemProperty, activeUnit);

  let flexItemValue = event.target.parentElement.previousElementSibling.lastElementChild.value;
  if (flexItemValue === '') {
    return;
  }

  flexItemValue = `${flexItemValue}${activeUnit}`;

  if (activeUnit === 'auto') {
    flexItemValue = 'auto'
  }

  drawUI.changePropertyOfElement(activeFlexItemElement, flexItemProperty, flexItemValue);
  drawUI.changePropretyDescription(descriptionElement, descriptionText);
  drawUI.changeExampleCSS(exampleCssField, changableElementName, flexItemProperty, flexItemValue);
}));

const inputsFields = document.querySelectorAll('.inputs__field');

inputsFields.forEach( input => input.value = '');

inputsFields.forEach((input) => input.addEventListener('input', (event) => {
  if(event.target.value === '') {
    return;
  }
  const flexItemProperty = event.target.closest('.container').lastElementChild.dataset.prop;
  let flexItemValue = null;
  let activeUnit = null;

  if (event.target.parentElement.nextElementSibling) {
    const currentInputsUnitsButtons = Array.from(event.target.parentElement.nextElementSibling.children);
    const [ activeInputsUnitsButton ] = currentInputsUnitsButtons.filter( button => button.classList.contains('active'));
    activeUnit = activeInputsUnitsButton.dataset.value;
    flexItemValue = activeUnit === 'auto' ? 'auto' : `${event.target.value}${activeUnit}`;
  } else {
    flexItemValue = event.target.value;
  }

  const flexItems = Array.from(event.target.closest('.container').lastElementChild.children);
  const [ activeFlexItem ] = flexItems.filter(flexItem => flexItem.dataset.ordinal === event.target.dataset.ordinal);

  const descriptionElement = event.target.closest('.container').nextElementSibling.firstElementChild;
  const descriptionText = descriprionGenerator.getDescription(flexItemProperty, activeUnit);
  const exampleCssField = event.target.closest('.container').nextElementSibling.lastElementChild;
  const changableElementName = event.target.closest('.container').dataset.id;

  drawUI.changePropertyOfElement(activeFlexItem, flexItemProperty, flexItemValue);
  drawUI.changePropretyDescription(descriptionElement, descriptionText);
  drawUI.changeExampleCSS(exampleCssField, changableElementName, flexItemProperty, flexItemValue);
}))

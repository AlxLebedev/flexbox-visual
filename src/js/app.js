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

  drawUI.changeActivePropertyButton(propertyButtons, event.target);
  drawUI.changePropertyOfElement(container, property, propertyValue);
  drawUI.changePropretyDescription(descriptionElement, descriptionText);
  drawUI.changeExampleCSS(exampleCssField, changableElementName, property, propertyValue);
}));

const selectFlexItemButtons = document.querySelectorAll('.select-item-button');

selectFlexItemButtons.forEach((button) => button.addEventListener('click', (event) => {
  const flexItemsButtons = Array.from(event.target.closest('.items-buttons').children);
  // console.log(flexItemsButtons);

  const flexPropertiesButtons = Array.from(event.target.parentElement.nextElementSibling.children);
  // console.log(flexPropertiesButtons);

  const descriptionElement = event.target.closest('.container').nextElementSibling.firstElementChild;
  // console.log(descriptionElement);

  // по клику на выбор элемента выбираем сам элемент из контейнера, считываем его data-value
  const flexItems = Array.from(event.target.closest('.container').lastElementChild.children);
  const [ flexItem ] = flexItems.filter( item => item.innerText === event.target.innerText);
  // console.log(flexItem);

  const [ flexProprtyButton ] = flexPropertiesButtons.filter( button => button.dataset.value === flexItem.dataset.value);
  console.log(flexProprtyButton);

  const flexItemValue = flexItem.dataset.value;
  // console.log(flexItemValue);

  const flexItemProperty = event.target.closest('.container').lastElementChild.dataset.prop;
  // console.log(flexItemProperty);

  const descriptionText = descriprionGenerator.getDescription(flexItemProperty, flexItemValue);
  // console.log(descriptionText);

  drawUI.changeActivePropertyButton(flexPropertiesButtons, flexProprtyButton);
  drawUI.clearActiveButtons(flexItemsButtons);
  drawUI.setActiveButton(event.target);
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

  // определяем itemFlexElement по признаку 'active' и устанавливаем уму data-value такой же как у кнопки
  const flexItemsButtons = Array.from(event.target.closest('.container').firstElementChild.firstElementChild.children);
  const [ activeFlexItemButton ] = flexItemsButtons.filter( element => element.classList.contains('active'));
  const activeElementIndex = +(activeFlexItemButton.innerText) - 1;
  const flexItemsElements = event.target.closest('.container').lastElementChild.children;
  itemFlexElement = flexItemsElements[activeElementIndex];
  itemFlexElement.setAttribute('data-value', event.target.dataset.value);

  drawUI.changeActivePropertyButton(propertyButtons, event.target);
  drawUI.changePropertyOfElement(itemFlexElement, property, propertyValue);
  drawUI.changePropretyDescription(descriptionElement, descriptionText);
  drawUI.changeExampleCSS(exampleCssField, changableElementName, property, propertyValue);
}));

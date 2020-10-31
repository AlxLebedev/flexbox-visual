export default class DrawUI {
  constructor() {
    this.element = null;
    this.descriptionElement = null;
    this.exampleCssField = null;
    this.currentButtons = null;
    this.targetButton = null;
  }

  changePropertyOfElement(element, property, value) {
    this.element = element;
    this.element.style[property] = value;
  }

  changePropretyDescription(descriptionElement, descriptionText) {
    if (!descriptionText) return;
    this.descriptionElement = descriptionElement;
    const htmlMarkup = `
    <p class = "description-block">${descriptionText === undefined ? '' : descriptionText}</p>`;
    const existedExplanation = descriptionElement.querySelector('.description-block');
    if (existedExplanation) {
      existedExplanation.remove();
    }
    this.descriptionElement.insertAdjacentHTML('beforeend', htmlMarkup);
  }

  changeExampleCSS(exampleCssField, changableElementName, property, propertyValue) {
    this.exampleCssField = exampleCssField;
    const htmlMarkup = `
    <code>
    .${changableElementName} {
    <pre>  ${property}: ${propertyValue};</pre>
    }
    </code>`;
    this.exampleCssField.innerHTML = htmlMarkup;
  }

  changeActivePropertyButton(buttons, targetButton) {
    this.currentButtons = buttons;
    this.currentButtons.forEach((button) => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    });
    targetButton.classList.add('active');
  }

  clearActiveButtons(buttons) {
    this.currentButtons = buttons;
    this.currentButtons.forEach((button) => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    });
  }

  setActiveButton(targetButton) {
    this.targetButton = targetButton;
    this.targetButton.classList.add('active');
  }
}

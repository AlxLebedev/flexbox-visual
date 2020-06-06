export default class DrawUI {
  constructor() {
    this.element = null;
    this.descriptionElement = null;
    this.exampleCssField = null;
    this.currentButtons = null;
  }

  changePropertyOfElement(element, property, value) {
    this.element = element;
    this.element.style[property] = value;
  }

  changePropretyDescription(descriptionElement, descriptionText) {
    this.descriptionElement = descriptionElement;
    const [commonText, propertyValueText] = descriptionText;
    const htmlMarkup = `
    <p class = "description-block">${commonText}</p>
    <p class = "description-block">${propertyValueText}</p>`;
    this.descriptionElement.innerHTML = htmlMarkup;
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

  changeActiveButton(buttons, targetButton) {
    this.currentButtons = buttons;
    this.currentButtons.forEach((button) => {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      }
    });
    targetButton.classList.add('active');
  }
}

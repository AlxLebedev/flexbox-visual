export default class DrawUI {
  constructor() {
    this.container = null;
    this.descriptionElement = null;
    this.exampleCssField = null;
  }

  changePropertyOfContainer(container, property, value) {
    this.container = container;
    this.container.style[property] = value;
  }

  changePropretyDescription(descriptionElement, descriptionText) {
    this.descriptionElement = descriptionElement;
    this.descriptionElement.innerText = descriptionText;
  }

  changeExampleCSS(exampleCssField, changableElementName, property, propertyValue) {
    this.exampleCssField = exampleCssField;
    const htmlMarkup = `
    <code>
    <pre>
    .${changableElementName} {
      ${property}: ${propertyValue};
    }
    </pre>
    </code>`;
    this.exampleCssField.innerHTML = htmlMarkup;
  }
}

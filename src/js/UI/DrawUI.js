export default class DrawUI {
  constructor() {
    this.container = null;
    this.descriptionElement = null;
  }

  changePropertyOfContainer(container, property, value) {
    this.container = container;
    this.container.style[property] = value;
  }

  changePropretyDescription(descriptionElement, descriptionText) {
    this.descriptionElement = descriptionElement;
    this.descriptionElement.innerText = descriptionText;
  }
}

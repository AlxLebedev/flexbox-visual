export default class DrawUI {
  constructor() {
    this.mainTitle = document.getElementById('main-title');
  }

  changePropertyOfContainer(container, property, value) {
    container.style[property] = value;
  }

  changePropretyDescription(descriptionElement, descriptionText) {
    descriptionElement.innerText = descriptionText;
  }
}

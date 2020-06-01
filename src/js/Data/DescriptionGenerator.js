export default class DescriptionGenerator {
  constructor() {
    this.displayProperty = {
      'block': 'Some text about display: block property in CSS3 and many usefull informations for students',
      'flex': 'Some text about display: flex property in CSS3 and many usefull informations for students',
    };
    this.flexDirectionProperty = {
      'row': 'Some text about flex-direction: row property in CSS3 and many usefull informations for students',
      'column': 'Some text about flex-direction: column property in CSS3 and many usefull informations for students',
      'row-reverse': 'Some text about flex-direction: row-reverse property in CSS3 and many usefull informations for students',
      'column-reverse': 'Some text about flex-direction: column-reverse property in CSS3 and many usefull informations for students',
    };
  }

  getDescription(property, value) {
    switch (property) {
      case 'display':
        return this.displayProperty[value];
      case 'flex-direction':
        return this.flexDirectionProperty[value];
      default:
        return 'No descriptions...';
    }
  }
}

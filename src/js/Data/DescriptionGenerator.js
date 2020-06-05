export default class DescriptionGenerator {
  constructor() {
    this.displayProperty = {
      common: 'Многоцелевое свойство, которое определяет, как элемент должен быть показан в документе. В данном случа, свойство применяется к контейнеру, в котором располагаются элементы и влияет именно на отображение элементов внутри контейнера.',
      block: 'При значении свойства block блочные элементы располагаются один над другим вертикально. Блочный элемент внутри контейнера стремится занять всю доступную ширину, но в нашем случае ширина и высота элементов ограничена, чтобы кубики были иенно кубиками. Блоки прилегают друг к другу вплотную, если нет внешних отступов.',
      flex: 'Если родительскому контейнеру назначить свойство display со значение flex, то с этого момента элементы внутри флекс-контейнера можно называть флекс-элементами (flex-items). Флекс-элементы внутри флекс-контейнера располагаются друг за другом вплотную, их ширина подстраивается под контент, если не определена отдельно.',
    };
    this.flexDirectionProperty = {
      common: 'Свойство применяется к флекс-контейнеру и задаёт направление основных осей в контейнере, тем самым определяет положение флекс-элементов в контейнере.',
      row: 'Значение row определяет, что главная ось направлена так же, как и ориентация текста, по умолчанию слева направо.',
      column: 'Значение column определяет, что, главная ось располагается вертикально и направлена сверху вниз.',
      'row-reverse': 'Похоже на значение row, но меняются местами начальная и конечная точки и главная ось направлена справа налево.',
      'column-reverse': 'Главная ось располагается вертикально, но меняется положение начальной и конечной точек и ось направлена снизу вверх.',
    };
    this.flexWrapProperty = {
      common: 'Свойство применяется к флекс-контейнеру и задаёт возможность переноса флекс-элементов на новую строку, если они не помещаются в рамках флекс-контейнера. По умолчанию флекс-элементы выстраиваются в ряд и стараются уместиться в контейнере "ужимая" свою ширину.',
      wrap: 'флекс-элементы будут перенесены на несколько строк сверху вниз.',
      nowrap: 'Все флекс-элементы будут в одной строке.',
      'wrap-reverse': 'флекс-элементы будут перенесены на несколько строк снизу вверх.',
    };
    this.justifyContentProperty = {
      common: 'Свойство применяется к флекс-контейнеру и задаёт выравнивание вдоль главной оси, тем самым распределяет свободное пространство внутри флекс-контейнера.',
      'flex-start': 'Значение flex-start является значением по умолчанию для флекс-контейнера - элементы сдвинуты в начало главной оси флекс-контейнера.',
      'flex-end': 'Элементы сдвинуты ближе к концу главной оси флекс-контейнера',
      'center': 'Элементы центрированы вдоль линии',
      'space-between': 'Элементы равномерно распределены по линии; первый элемент находится в начале строки, последний элемент в конце строки',
      'space-around': 'Элементы равномерно распределены по линии с одинаковым пространством вокруг них. Обратите внимание, что визуально пространства не равны, так как все элементы имеют одинаковое пространство с обеих сторон. Первый элемент будет иметь одну единицу пространства напротив края контейнера, но две единицы пространства между следующим элементом, потому что у следующего элемента есть свой собственный интервал, который применяется.',
      'space-evenly': 'Элементы распределяются таким образом, чтобы расстояние между любыми двумя элементами (и расстояние до краев) было одинаковым.',
    };
    this.alignItemsProperty = {
      common: 'Это свойство определяет поведение по умолчанию того, как flex элементы располагаются вдоль поперечной оси на текущей линии. Думайте об этом как о justify-content версии для поперечной оси (перпендикулярной главной оси).',
      'stretch': 'Значение stretch является значением по умолчанию для флекс-контейнера - элементы растягиваются, чтобы заполнить контейнер (все еще соблюдаются min-width / max-width).',
      'flex-start': 'Элементы размещаются в начале поперечной оси.',
      'flex-end': 'Элементы располагаются в конце поперечной оси',
      'center': 'Элементы центрированы по поперечной оси',
      'baseline': 'Элементы выровнены, по их базовой линии.',
    };
  }

  getDescription(property, value) {
    switch (property) {
      case 'display':
        return [this.displayProperty.common, this.displayProperty[value]];
      case 'flex-direction':
        return [this.flexDirectionProperty.common, this.flexDirectionProperty[value]];
      case 'flex-wrap':
        return [this.flexWrapProperty.common, this.flexWrapProperty[value]];
      case 'justify-content':
        return [this.justifyContentProperty.common, this.justifyContentProperty[value]];
      case 'align-items':
        return [this.alignItemsProperty.common, this.alignItemsProperty[value]];
      default:
        return 'No descriptions...';
    }
  }
}

class TestComponentController {
  constructor() {
    'ngInject';
    console.log('asdads');
  }
}

export const testComponent = {
  template: require('./testComponent.html'),
  controller: TestComponentController,
};

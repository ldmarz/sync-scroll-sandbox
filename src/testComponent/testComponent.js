class TestComponentController {
  constructor() {
    'ngInject';
    this.rows = [];
    this.length = 1000;
    this.init();
  }

  init() {
    for (let x=1; x < this.length; x++) {
      this.rows.push(x);
    }
  }
}

export const testComponent = {
  template: require('./testComponent.html'),
  controller: TestComponentController,
};

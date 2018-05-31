import angular from 'angular';
import {testComponent} from './testComponent/testComponent';
import mainController from './main/mainController';
const app = 'app';

angular
  .module(app, [])
  .controller('mainController', mainController)
  .component('testComponent', testComponent)
  .run();
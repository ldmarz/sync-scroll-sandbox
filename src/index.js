import angular from 'angular';
import {testComponent} from './testComponent/testComponent';
import mainController from './main/mainController';
import './library/syncscroll-0.0.3/syncscroll';

import './main/styles.css'

const app = 'app';

angular
  .module(app, [])
  .controller('mainController', mainController)
  .component('testComponent', testComponent)
  .run();
'use strict';

import angular from 'angular';
import MainController from './main.component';
import routing from './main.routes';

export default angular.module('mmrApp.main', ['ui.router'])
  .config(routing)
  .controller('MainController', MainController)
  .name;

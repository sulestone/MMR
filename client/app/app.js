'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import _Site from '../components/site/site.module';
import { siteModel } from '../components/site/site';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main';
import constants from './app.constants';
import _Modal from '../components/modal/modal.service';
import util from '../components/util/util.module';

import './app.scss';

angular.module('mmrApp', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, _Auth, _Site, account,
  admin, navbar, footer, main, constants, _Modal, util
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';

    $rootScope.site = siteModel();
    
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['mmrApp'], {
      strictDi: true
    });
  });

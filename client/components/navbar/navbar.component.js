'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];

  isCollapsed = true;

  sites = [];
  selectedSite = {};

  constructor(Auth, Site, $rootScope) {
    'ngInject';
    
    this.site = Site;
    this.rootScope = $rootScope;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.selectedSite = this.rootScope.site;
  }

  setSelectedSite(location) {
    this.site.onSiteSelection(location)
      .then(site => {
        this.selectedSite = site.data; 
        this.rootScope.site = this.selectedSite;
      });
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;

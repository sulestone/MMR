import angular from 'angular';

import {SiteFactory} from './site.factory';

export default angular.module('mmrApp.site', [])
    .factory('Site', SiteFactory)
    .name;
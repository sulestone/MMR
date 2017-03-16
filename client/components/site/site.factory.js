'use strict';

import {siteModel} from './site';

export function SiteFactory($http, $q, Util, Auth) {
    'ngInject';

    var safeCb = Util.safeCb;
    var currentSite = siteModel();

    // if(Auth.isLoggedInSync()) {
    //     currentSite = SiteService.get();
    // }

    var Factory = {

        getSites() {
            return this.$http.get('/api/sites')
        }, 

        onSiteSelection(site) {
            return $http.get('/api/sites/' + site);
        }
    }

    return Factory;
}
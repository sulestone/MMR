'use strict';

export function SiteResource($resource) {
    'ngInject';

    return $resource('/api/sites', {
        get: {
            method: 'GET'
        }
    });
}
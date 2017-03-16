'use strict';

import Site from './site.model';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';

function validationError(res, statusCode) {
    statusCode = statusCode || 422;
    return function(err) {
        return res.status(statusCode).json(err);
    };
}

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
        return res.status(statusCode).send(err);
    };
}

/**
 * Get list of sites
 * restriction: admin
 */
export function index(req, res) {
    return Site.find({}).exec()
        .then(sites => {
            res.status(200).json(sites);
        })
        .catch(handleError(res));
}

export function show(req, res) {
    var location = req.params.id;
    
    return Site.findOne({location: location})
        .exec()
        .then(site => {
            res.status(200).json(site);
        })
        .catch(handleError(res));
}
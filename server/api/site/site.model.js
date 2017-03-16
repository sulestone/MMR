'use strict';

mongoose.Promise = require('bluebird');
import mongoose, {Schema} from 'mongoose';

var SiteSchema = new Schema({
    company: String,
    location: { type: String, index: { unique: true }},
    r_name: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    postal_code: Number,
    country: String,
    county: String,
    addr_contact: String
});

export default mongoose.model('Site', SiteSchema);
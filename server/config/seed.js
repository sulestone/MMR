/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Site from '../api/site/site.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    Thing.find({}).remove()
      .then(() => {
        Thing.create({
          name: 'Development Tools',
          info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
                + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
                + 'Stylus, Sass, and Less.'
        }, {
          name: 'Server and Client integration',
          info: 'Built with a powerful and fun stack: MongoDB, Express, '
                + 'AngularJS, and Node.'
        }, {
          name: 'Smart Build System',
          info: 'Build system ignores `spec` files, allowing you to keep '
                + 'tests alongside code. Automatic injection of scripts and '
                + 'styles into your index.html'
        }, {
          name: 'Modular Structure',
          info: 'Best practice client and server structures allow for more '
                + 'code reusability and maximum scalability'
        }, {
          name: 'Optimized Build',
          info: 'Build process packs up your templates as a single JavaScript '
                + 'payload, minifies your scripts/css/images, and rewrites asset '
                + 'names for caching.'
        }, {
          name: 'Deployment Ready',
          info: 'Easily deploy your app to Heroku or Openshift with the heroku '
                + 'and openshift subgenerators'
        });
      })
    .then(() => console.log('finished populating things'))
    .catch(err => console.log('error populating things', err));

    // Site.find({}).remove()
    //   .then(() => {
    //     Site.create({
    //       company: '1',
    //       location: '11111',
    //       r_name: '1st Hospital',
    //       address1: '45 Gave Rd',
    //       address2: '',
    //       city: 'Gave City',
    //       state: 'FL',
    //       postal_code: 11111,
    //       country: 'USA',
    //       county: 'Gaving',
    //       addr_contact: 'Andrea Day'
    //     }, {
    //       company: '1',
    //       location: '22222',
    //       r_name: '2nd Hospital',
    //       address1: '45 Have Rd',
    //       address2: '',
    //       city: 'Have City',
    //       state: 'FL',
    //       postal_code: 22222,
    //       country: 'USA',
    //       county: 'Having',
    //       addr_contact: 'Andre Day'
    //     },
    //     {
    //       company: '1',
    //       location: '28888',
    //       r_name: '3rd Hospital',
    //       address1: '45 Cave Rd',
    //       address2: '',
    //       city: 'Cave City',
    //       state: 'FL',
    //       postal_code: 28888,
    //       country: 'USA',
    //       county: 'Caving',
    //       addr_contact: 'Andra Day'
    //     }
    //     );
    //   })
    // .then(() => console.log('finished populating sitess'))
    // .catch(err => console.log('error populating sites', err));

    // User.find({}).remove()
    //   .then(() => {
    //     User.create({
    //       provider: 'local',
    //       name: 'Test User',
    //       email: 'test@example.com',
    //       password: 'test',
    //       sites: [1, 2, 3]
    //     }, {
    //       provider: 'local',
    //       role: 'admin',
    //       name: 'Admin',
    //       email: 'admin@example.com',
    //       password: 'admin',
    //       sites: [{location: '28888'}, {location: '00197'}, {location: '11111'}]
    //     })
    //     .then(() => console.log('finished populating users'))
    //     .catch(err => console.log('error populating users', err));
    //   });
  }
}

'use strict';

export default class AdminController {
  /*@ngInject*/
  constructor(User, Modal, $stateParams, $rootScope) {
    // Use the User $resource to fetch all users
    this.users = User.query();
    this.modal = Modal;
    console.log(this.modal)
    var site = $stateParams.site;
    console.log($rootScope.site);
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }

  open() {
    
  }
}

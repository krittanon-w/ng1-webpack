// deps
import angular from 'angular'
import uirouter from '@uirouter/angularjs'

// inc
import routes from './users.routes'
import userList from './userList/userList.component'
import UsersService from './users.service'

export default angular.module('app.users', [uirouter])
  .config(routes)
  .component('userList', userList)
  .service('UsersService', UsersService)
  .name
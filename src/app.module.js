// deps
import angular from 'angular'
import uirouter from '@uirouter/angularjs'

// inc
import routes from './app.routes'
import users from './users'


angular.module('app', [uirouter, users])
    .config(routes)
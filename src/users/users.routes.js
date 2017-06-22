routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('users', {
    url: '/',
    template: require('./users.html'),
    resolve: {
      users: ['UsersService', (UsersService) => {
        return UsersService.getUsers()
      }]
    }
  });
}
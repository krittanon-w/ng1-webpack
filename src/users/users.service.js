export default class UsersService {
  constructor($http) {
    this.$http = $http
  }

getUsers() {
    // return this.$http.get('https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json')
    return this.$http.get('https://reqres.in/api/users?page=2')
  }
}
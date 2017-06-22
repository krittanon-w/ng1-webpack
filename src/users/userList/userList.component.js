function userListCtrl() {
  console.log(this)
}
/// ss

module.exports = {
  template: require('./userList.html'),
  controller: userListCtrl,
  bindings: {
    users: '='
  }
}
function ApiService($http, $location) {
  this.$http = $http;
  this.location = $location;
  this.profile = ""; 
  
}

angular.module('userApp').service('api', ApiService);

var BASE_URL = 'https://mock-login-server.herokuapp.com/api/';
var LOGIN_URL = BASE_URL + 'login';
var LOGOUT_URL = BASE_URL + 'logout';
var PROFILE_URL = BASE_URL + 'user';
var CREATE_ACCOUNT_URL = BASE_URL + 'createAccount';

ApiService.prototype.login = function(username, password) {
  return this.$http.post(LOGIN_URL, {username: username, password: password})
  .then(function(response) {
    localStorage.authToken = response.data.authToken;
     console.log(response);
  });
};


/*TODO: 
  add a logout() function that sends a POST to
  https://mock-login-server.herokuapp.com/api/logout
*/
ApiService.prototype.logout = function() {
  return this.$http.post(LOGOUT_URL)
  .then(function(response){
   console.log("successful logout");
    localStorage.authToken = null;
  });
};

/*TODO: 
  add a getProfile() function that sends a GET to
  https://mock-login-server.herokuapp.com/api/user
  
  This function should a return a promise that 
  resolves the user data
*/
ApiService.prototype.getProfile = function() {
  var self = this;
  return this.$http.get(PROFILE_URL)
  .success(function(response){
    console.log(response);
    self.profile = response;
  })
  .error(function(response){
    console.log(response);
  });
};

/*TODO:
  add a createAccount() function that sends POST to
  https://mock-login-server.herokuapp.com/api/createAccount
*/
ApiService.prototype.createAccount = function(username, password){
  return this.$http.post(CREATE_ACCOUNT_URL,  {username: username, password: password})
  .then(function(response){
    localStorage.authToken = response.data.authToken;
  });
};




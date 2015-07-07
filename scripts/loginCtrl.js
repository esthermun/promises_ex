function LoginCtrl(api, $location) {
  this.api = api;
  this.location = $location;
 
  
}

angular.module('userApp').controller('LoginCtrl', LoginCtrl);

LoginCtrl.prototype.newAccount = function(username, password){
	this.api.createAccount(username, password);
	this.username = "";
	this.password = "";
}

LoginCtrl.prototype.login = function(username, password){
	var self = this;
	this.api.login(username, password)
	.then(function(){
		self.username = "";
		self.password = "";
		self.location.url("/profile/");
	});
	
}
function ProfileCtrl(api, $location) {
	this.api = api;
	this.location = $location;
	this.profile = this.api.profile;
	this.favColor = "#" + this.profile.favouriteColor.slice(2);
}

angular.module('userApp').controller('ProfileCtrl', ProfileCtrl);


ProfileCtrl.prototype.logout = function(){
	this.api.logout();
	this.location.url('/login');
};

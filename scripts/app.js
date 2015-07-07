var app = angular.module('userApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider, $httpProvider){
 
  $routeProvider
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl as ctrl'
    })
    .when('/profile', {
      templateUrl: 'templates/profile.html',
      controller: 'ProfileCtrl as ctrl',
       /*TODO: Add a "resolve" that loads the user
      profile before the profile page loads. If there
      is an error loading the profile then redirect
      the user to the login page.*/
     
      resolve: {
        function(api){
          return api.getProfile();
        }
      }
    })
    .otherwise({
      redirectTo:'/login'
    });

  $httpProvider.interceptors.push(function(){
    return {
      'request': function(config) {
        config.header = config.header || {};
        if(localStorage.authToken) {
          config.headers.Authorization = localStorage.authToken;
        }
        return config;
      }
    };

  });

});



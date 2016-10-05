tipidapp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'pages/auth/login.html',
		controller : 'LoginController'
	})
	.when('/register', {
		templateUrl : 'pages/auth/register.html',
		controller : 'RegisterController'
	})
	.when('/forgot', {
		templateUrl : 'pages/auth/forgot.html',
		controller : 'ForgotController'
	})
	.when('/home', {
		templateUrl : 'pages/dashboard/home.html',
		controller: 'HomeController'
	})
	.when('/diary', {
		templateUrl : 'pages/dashboard/diary.html'
	})
	.when('/settings', {
		templateUrl : 'pages/dashboard/settings.html'
	})
	.when('/appsettings', {
		templateUrl : 'pages/dashboard/settings/appsettings.html',
		controller : 'AppSettingsController'
	})
});

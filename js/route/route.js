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
	.when('/dashboard', {
		templateUrl : 'pages/dashboard/dashboard.html',
		controller: 'DashboardController'
	})
	.when('/settings', {
		templateUrl : 'pages/dashboard/settings.html'
	})
});


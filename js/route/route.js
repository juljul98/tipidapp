tipidapp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'pages/auth/login.html',
		controller : 'LoginController',
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
		title: 'LifeNotes',
		templateUrl : 'pages/dashboard/home.html',
		controller: 'HomeController'
	})
	.when('/diary', {
		title: 'Diary',
		templateUrl : 'pages/dashboard/diary.html'
	})
	.when('/settings', {
		title : 'Settings',
		templateUrl : 'pages/dashboard/settings.html'
	})
	.when('/appsettings', {
		title: 'App Settings',
		templateUrl : 'pages/dashboard/settings/appsettings.html',
		controller : 'AppSettingsController'
	})
	.when('/help', {
		title: 'Help',
		templateUrl: 'pages/dashboard/settings/help.html',
		controller : 'HelpController'
	
	})
});

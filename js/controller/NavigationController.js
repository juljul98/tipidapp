tipidapp.controller('NavigationController', ['$scope', '$rootScope', '$route', function ($scope, $rootScope, $route) {

    $rootScope.$on('$routeChangeSuccess', function() {
        $scope.title = $route.current.title;
    });

	$scope.navigation = ['home', 'diary', 'settings'];
	$scope.activeMenu = $scope.navigation[0];

    $scope.setActive = function(navigation) {
    	$scope.activeMenu = navigation
	}

	$scope.toggleaction = 'search';
	$scope.toggleactive = false;
	var action = false;
	$scope.togglesearch = function() {
		if ( action == false ) {
			// Search mode
			$scope.toggleaction = 'close';
			$scope.toggleactive = true;
			action = true;
		} else {
			// Default
			$scope.toggleaction = 'search';
			$scope.toggleactive = false;
			action = false;
		}
	}

	$scope.backbutton = function() {
		window.history.back(-1);
	}

}]);
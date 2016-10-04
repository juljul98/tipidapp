tipidapp.controller('NavigationController', function($scope, $rootScope, $window) {

	$scope.navigation = ['home', 'tools', 'settings'];
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
	$rootScope.backbutton = function() {
		$window.history.back();
	}
});
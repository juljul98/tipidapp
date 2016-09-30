tipidapp.controller('NavigationController', function($scope) {

	$scope.navigation = ['home', 'tools', 'settings'];
	$scope.activeMenu = $scope.navigation[0];

    $scope.setActive = function(navigation) {
    	$scope.activeMenu = navigation
	}
});
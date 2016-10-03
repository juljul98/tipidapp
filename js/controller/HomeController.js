tipidapp.controller('HomeController', function($scope) {
	$scope.page = 'Home';
	$scope.share = function() {
		$('#modalsocial').openModal();
	}

});
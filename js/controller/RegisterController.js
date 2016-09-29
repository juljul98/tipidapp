tipidapp.controller('RegisterController', function($scope) {

	$scope.page = 'Registration';

	$scope.modaltriggeropen = function() {
		$('#modalterms').openModal();
	}
	$scope.modaltriggerclose = function() {
		$('#modalterms').closeModal();
	}

	$scope.registerForm = function() {
		
	}

});
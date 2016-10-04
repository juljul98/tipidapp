tipidapp.controller('HomeController', function($scope) {
	$scope.page = 'Home';
	$scope.share = function() {
		$('#modalsocial').openModal();
	}
	$scope.modalimage = function() {
		$('#modalimages').openModal();
	}
	$scope.cancelupload = function() {
		confirm('Do you want to cancel upload');
	}


});
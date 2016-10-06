tipidapp.controller('HelpController',  function ($rootScope, $scope) {
  
	$scope.load = function() {
       $('.collapsible').collapsible({
      		accordion : false
    	});
   };
   $scope.load();
});
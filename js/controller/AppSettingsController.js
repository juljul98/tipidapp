tipidapp.controller('AppSettingsController', function($scope) {
   $scope.load = function() {
       $('.collapsible').collapsible({
      		accordion : false
    	});
   };
   $scope.load();
});
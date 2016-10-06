tipidapp.controller('AppSettingsController', function ($rootScope, $scope) {

   $scope.load = function() {
       $('.collapsible').collapsible({
      		accordion : false
    	});
   };
   $scope.load();
});
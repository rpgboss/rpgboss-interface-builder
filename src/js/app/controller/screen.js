define([], function() {

	function Screen($scope, ngDialog, ProjectService,$rootScope) {

		$scope.project = ProjectService.current();

	}

	Screen.$inject = ['$scope','ngDialog','ProjectService','$rootScope'];

	return Screen;

});
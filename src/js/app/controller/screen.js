define([], function() {

	function Screen($scope, ngDialog, ProjectService,$rootScope) {

		$rootScope.$on('project-loaded', function() {
			$scope.project = ProjectService.current();
			$scope.$apply();
		});

		$scope.resize = function(evt) {
			console.log(evt);
		}

		$scope.imageLoaded = function(evt, element) {
			var width = evt.currentTarget.naturalWidth;
			var height = evt.currentTarget.naturalHeight;
			element.width = width;
			element.height = height;
		}

	}

	Screen.$inject = ['$scope','ngDialog','ProjectService','$rootScope'];

	return Screen;

});
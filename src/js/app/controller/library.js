define([], function() {

	function Library($scope, ngDialog, DialogService,$rootScope, ProjectService) {

		$scope.elements = [];

		$rootScope.$on('project-loaded', function() {

			$scope.project = ProjectService.current();
			$scope.$apply();

		});

		$scope.select = function(evt, element) {
			$('.libelement').removeClass('active');
			evt.currentTarget.className += " active";

			$rootScope.$broadcast('select-element-on-stage', element);
		}

	}

	Library.$inject = ['$scope','ngDialog','DialogService','$rootScope','ProjectService'];

	return Library;

});
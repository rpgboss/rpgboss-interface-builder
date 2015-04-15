define([], function() {

	function Library($scope, ngDialog, DialogService,$rootScope, ProjectService) {

		$scope.elements = [];

		$rootScope.$on('project-loaded', function() {

			$rootScope.projectLoaded = true;

			$scope.project = ProjectService.current();
			$scope.$apply();

		});

		$scope.select = function(evt, element) {
			$('.libelement,.stageelement').removeClass('active');
			evt.currentTarget.className += " active";

			$rootScope.$broadcast('select-element-on-stage', {
				element : element,
				location : 0
			});
		}

	}

	Library.$inject = ['$scope','ngDialog','DialogService','$rootScope','ProjectService'];

	return Library;

});
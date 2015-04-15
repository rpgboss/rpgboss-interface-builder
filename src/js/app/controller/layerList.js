define([], function() {

	function LayerList($scope, ngDialog, DialogService,$rootScope, ProjectService) {

		$scope.elements = [];

		$rootScope.$on('project-loaded', function() {

			$scope.project = ProjectService.current();
			$scope.$apply();

		});

		$scope.sortStop = function(evt, ui) {
			console.log('stop')
		}

	}

	LayerList.$inject = ['$scope','ngDialog','DialogService','$rootScope','ProjectService'];

	return LayerList;

});
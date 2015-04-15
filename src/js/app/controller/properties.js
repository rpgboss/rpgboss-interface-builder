define([], function() {

	function Properties($scope, ngDialog, DialogService,$rootScope,LibraryService,CanvasService) {

		$scope.removeFromLibrary = function(evt) {
			evt.preventDefault();
			LibraryService.removeElement($scope.element);
			$rootScope.$broadcast('remove-properties');
		}

		$scope.removeFromStage = function(evt) {
			evt.preventDefault();
			CanvasService.removeElement($scope.element);
			$rootScope.$broadcast('remove-properties');
		}

		$scope.addToStage = function(evt) {
			evt.preventDefault();
			CanvasService.addElement($scope.element,1);
		}

		$rootScope.$on('select-element-on-stage', function(e, data) {

				var templateName = "";
				console.log(data)
				if(data.location==0) {

					if(data.element.type==1) {
						templateName = "libelement";
					}

				}
				if(data.location==1) {

					if(data.element.type==1) {
						templateName = "image";
					}

				}

				$scope.element = data.element;

				$scope.template = 'partials/properties/'+templateName+'.html';

				$scope.$apply();

		});

		$rootScope.$on('remove-properties', function(e) {
			$scope.template = 'partials/properties/none.html';
		});

	}

	Properties.$inject = ['$scope','ngDialog','DialogService','$rootScope','LibraryService','CanvasService'];

	return Properties;

});
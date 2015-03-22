define([], function() {

	function Properties($scope, ngDialog, DialogService,$rootScope,LibraryService) {

		$scope.removeFromLibrary = function(evt) {
			evt.preventDefault();
			LibraryService.removeElement($scope.element);
			$rootScope.$broadcast('remove-properties');
		}

		$rootScope.$on('select-element-on-stage', function(e, element) {

				var templateName = "";

				if(element.type==0) {
					templateName = "image";
				}
				if(element.type==1) {
					templateName = "libelement";
				}

				$scope.element = element;

				$scope.template = 'partials/properties/'+templateName+'.html';

		});

		$rootScope.$on('remove-properties', function(e) {
			$scope.template = 'partials/properties/none.html';
		});

	}

	Properties.$inject = ['$scope','ngDialog','DialogService','$rootScope','LibraryService'];

	return Properties;

});
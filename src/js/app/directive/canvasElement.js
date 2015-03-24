define([], function() {

	function CanvasElement() {

	  return {
	    restrict: 'E',
	    transclude: true,
	    scope: {
	    	element : "=element"
	    },
	    controller : function($scope, $rootScope) {

	    	$scope.element.style = {
	    		zIndex : $scope.element.layer
	    	}

	    }
	 }
  };

  return CanvasElement;

});
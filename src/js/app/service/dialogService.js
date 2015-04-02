define([], function() {

	function DialogService(ngDialog) {

		this.confirm = function(title, text, onConfirm) {
				ngDialog.open({
				    template: 'partials/dialog/confirm.html',
				    controller: ['$scope', function($scope) {

				    		$scope.title = title;
				    		$scope.text= text;

				        $scope.confirm = function() {
				        	$scope.closeThisDialog();
				        	if(angular.isFunction(onConfirm)) onConfirm();
				        }
				    }]
				});	
			}

		this.about = function(onConfirm) {
				ngDialog.open({
				    template: 'partials/dialog/about.html',
				    controller: ['$scope', function($scope) {

				    	$scope.version = appVersion;

				        $scope.confirm = function() {
				        	$scope.closeThisDialog();
				        	if(angular.isFunction(onConfirm)) onConfirm();
				        }
				    }]
				});	
			}
	}

	DialogService.$inject = ['ngDialog'];

	return DialogService;

});
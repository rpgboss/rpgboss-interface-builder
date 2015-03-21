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
}

DialogService.$inject = ['ngDialog'];
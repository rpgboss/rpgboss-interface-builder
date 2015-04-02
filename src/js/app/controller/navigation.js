define([], function() {

	function Navigation($scope, ngDialog, DialogService,$rootScope,ProjectService, AppSettingsService,CanvasService) {

		AppSettingsService.load(function() {
			$scope.last = AppSettingsService.current().last;
			$scope.$apply();
			console.log(AppSettingsService.current());
		});

		$scope.updateAndImport = function(input) {
			var files = input.files;

			for (var i = 0; i < files.length; i++) { //for multiple files          
			    (function(file) {
			        var name = file.name;
			        var reader = new FileReader();  
			        reader.onloadend = function(e) {  
				        if(/.png|.jpg|.jpeg/.test(file.name)) {
				          ProjectService.addResource(file.name, reader.result);
				          $scope.$apply();
				        }
			        }
			        reader.readAsDataURL(file);
			    })(files[i]);
			}
		}

		$scope.import_to_library = function(evt) {
			evt.preventDefault();
			console.log('asd')
			var chooser = document.getElementById('fileChooser');
			chooser.click();
		}

		$scope.new_project = function(evt) {
			evt.preventDefault();

			ngDialog.open({
			    template: 'partials/dialog/new_project.html',
			    controller: ['$scope', function($scope) {

			    		$scope.selectDir = function(evt) {
			    			evt.preventDefault();
			    			var dir = document.getElementById('directory');
				    		dir.addEventListener("change", function(evt) {
						      $scope.directory = this.value;
						      $scope.$apply();
						    }, false);
			    			dir.click();
			    		}

			    		$scope.create = function() {

			    			if($scope.name !=null && $scope.name != ''
			    				&& $scope.directory !=null && $scope.directory != '') {

				    			ProjectService.create($scope.name, $scope.directory, function(result,err) {
				    				if(result) {
				    					DialogService.confirm('Notice','The project was successfully created.', function() {
					    					AppSettingsService.load(function() {
						    					AppSettingsService.current().last = ProjectService.current().name;
						    					AppSettingsService.current().lastFilePath = $scope.filepath;
						    					AppSettingsService.save();
						    					$scope.last = AppSettingsService.current().last;
						    					ProjectService.reset();
						    					ngDialog.close();
					    					});
				    					});
				    				} else {
				    					DialogService.confirm('Notice','The project couldnt be created at that location. Error:' + err);
				    				}
				    			});
			    			}		else {
			    				DialogService.confirm('Notice','You need to give your project a name and select a folder.');
			    			}
			    		}

			        $scope.cancel = function() {
			        	$scope.closeThisDialog();
			        }
			    }]
			});		
		}

		$scope.save_project = function(evt) {
			evt.preventDefault();

			ProjectService.save(function(result) {
				console.log(result);
			});
		}

		$scope.open_last = function(evt) {
			evt.preventDefault();
			ProjectService.load(AppSettingsService.current().lastFilePath, function(result, err) {
					if(result) {
						ngDialog.close();
						AppSettingsService.load(function() {
	  					$scope.last = AppSettingsService.current().last;
	  					$rootScope.$broadcast('project-loaded');
						});
					} else {
						DialogService.confirm('Notice','Could not load the file. Error:' + err);
					}
			});
		}

		$scope.close_project = function(evt) {
			evt.preventDefault();
			DialogService.confirm('Notice','This feature is not build in yet.');
		}

		$scope.export_to_script = function(evt) {
			evt.preventDefault();
			DialogService.confirm('Notice','This feature is not build in yet.');
		}

		$scope.open_project = function(evt) {
			evt.preventDefault();

			ngDialog.open({
			    template: 'partials/dialog/open_project.html',
			    controller: ['$scope', function($scope) {

			    		$scope.selectProjectServiceFile = function(input) {
			    			evt.preventDefault();
					      $scope.filepath = input.value;
					      $scope.$apply();
			    		}

			    		$scope.openFileDialog = function() {
			    			var file = document.getElementById('filepath');
			    			file.click();
			    		}

			    		$scope.open = function() {

			    			if($scope.filepath !=null && $scope.filepath != '') {

				    			ProjectService.load($scope.filepath, function(result,err) {
				    				if(result) {
				    					ngDialog.close();
				    					AppSettingsService.load(function() {
					    					AppSettingsService.current().last = ProjectService.current().name;
					    					AppSettingsService.current().lastFilePath = $scope.filepath;
					    					AppSettingsService.save();
					    					$scope.last = AppSettingsService.current().last;
					    					$rootScope.$broadcast('project-loaded');
				    					});
				    				} else {
				    					DialogService.confirm('Notice','Could not load the file. Error:' + err);
				    				}
				    			});
			    			}		else {
			    				DialogService.confirm('Notice','You need to select a project file first.');
			    			}
			    		}

			        $scope.cancel = function() {
			        	$scope.closeThisDialog();
			        }
			    }]
			});		
		}

		$scope.open_about = function(evt) {
			evt.preventDefault();
			DialogService.about();
		}

		$scope.exit = function(evt) {
			evt.preventDefault();
			win.close();
		}
	}

	Navigation.$inject = ['$scope','ngDialog','DialogService','$rootScope','ProjectService','AppSettingsService','CanvasService'];

	return Navigation;

});
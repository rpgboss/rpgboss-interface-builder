define([], function() {

	function AppSettingsService($rootScope) {

		var data = {};

		var homepath = osenv.home();

		function save(cb) {

			fs.writeFile(homepath + '/rpgbossib-settings.json', JSON.stringify(data), function(err) {
			    if(err) {
			        return cb(false,err);
			    }

			    if(angular.isFunction(cb)) cb(true);
			}); 
		}

		function load(cb) {

			var path = homepath + '/rpgbossib-settings.json';
			console.log(path)
			if (!fs.existsSync(path)) {
				fs.writeFile(path, JSON.stringify(data), function(err) {
				    if(err) {
				        return cb(false,err);
				    }

				    if(angular.isFunction(cb))  load(cb);
				    return;
				}); 
			}
			fs.readFile(path, 'utf8', function (err,filedata) {
			  if (err) {
			    return cb(false, err);
			  }
			  data = JSON.parse(filedata);
			  if(angular.isFunction(cb)) cb(true);
			});
		}

		return {
			current : function() {
				return data;
			},
			load : function(cb) {
				load(cb);
			},
			save : function(cb) {
				save(cb);
			}
		}
	}

	AppSettingsService.$inject = ['$rootScope'];

	return AppSettingsService;

});
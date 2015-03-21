var Project = (function() {

	var data = {};

	var path = '';

	function resetData() {
		data = {
			name : "",
			settings : {},
			resources : [],
			canvasElements : []
		}
	}

	function create(name, dirpath, cb) {
		resetData();

		data.name = name;

		path = dirpath + "/" + name + ".rpgbossib";

		fs.writeFile(dirpath + "/" + name + ".rpgbossib", JSON.stringify(data), function(err) {
		    if(err) {
		        return cb(false,err);
		    }

		    cb(true);
		}); 
	}

	function save(filepath, cb) {

		fs.writeFile(filepath, JSON.stringify(data), function(err) {
		    if(err) {
		        return cb(false,err);
		    }

		    cb(true);
		}); 
	}

	function load(filepath, cb) {
		fs.readFile(filepath, 'utf8', function (err,filedata) {
		  if (err) {
		    return cb(false, err);
		  }
		  path = filepath;
		  data = JSON.parse(filedata);

		  cb(true);
		});
	}

	return {
		create : function(name, dirpath,cb) {
			create(name, dirpath, cb);
		},
		load : function(filepath,cb) {
			resetData();
			load(filepath, cb);
		},
		save : function(cb) {
			save(path, cb);
		},
		close : function() {
			resetData();
		},
		current : function() {
			return data;
		},
		addResource : function(name, filedata) {
			var index = data.resources.length;
			data.resources.push(new Resource(index, name, filedata));
		},
		addCanvasElement : function(resourceindex, x, y) {
			var index = data.canvasElements.length;
			var element = new CanvasElement(0, resourceindex, index, x, y);
			data.canvasElements.push(element);

			return element;
		},
		loaded : function() {
			return path != '';
		},
		setData : function(changes) {
			angular.extend(data, changes);
		}
	}
})();
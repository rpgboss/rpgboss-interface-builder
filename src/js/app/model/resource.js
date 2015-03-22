define([], function() {

	var Resource = function() {

		this.init = function(index, name, data) {
			this.type = 1;

			this.index = index;

			this.name = name;

			this.data = data;
		}
	};

	return Resource;

});
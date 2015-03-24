define([], function() {

    function resizable() {
        var resizableConfig = {
            aspectRatio: true
        };

        return {
            restrict: 'A',
            scope: {
                callback: '&onResize'
            },
            link: function postLink(scope, elem) {
                elem.resizable(resizableConfig);
                elem.on('resizestop', function (evt) {
                    if (scope.callback) scope.callback(evt);
                });
            }
        };
    }

    return resizable;

});
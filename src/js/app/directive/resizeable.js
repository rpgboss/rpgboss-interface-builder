define([], function() {

    function resizable() {
        var resizableConfig = {
            aspectRatio: true
        };
        var draggableConfig = {
            containment : $('#screen')
        };

        return {
            restrict: 'A',
            scope: {
                onSelect: '=onSelect',
                onResize: '=onResize',
                onDrag : '=onDrag',
                model : '=model'
            },
            link: function postLink(scope, elem) {
                elem.resizable(resizableConfig);
                elem.draggable(draggableConfig);

                elem.on('resizestop', function (evt) {
                    if (scope.onResize) scope.onResize(evt, scope.model);
                });
                elem.on( "dragstop", function(evt) {
                    if (scope.onDrag) scope.onDrag(evt, scope.model);
                });
                elem.on('click', function(evt) {
                    if (scope.onSelect) scope.onSelect(evt, scope.model);
                });

                setTimeout(function() {
                    scope.$emit('element-resize',{element: scope.model, target : $(elem).get(0)});
                    scope.$emit('element-drag',{element: scope.model, target : $(elem).get(0)});
                },0);
                
            }
        };
    }

    return resizable;

});
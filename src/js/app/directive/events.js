define([], function() {

    function events() {
        return {
            scope : {
                onLoad : "=onLoad",
                model : "=model"
            },
            link: function(scope, element, attrs) {   

                element.bind("load" , function(e){ 
                    if (scope.onLoad) scope.onLoad(e, scope.model);
                });
            }
        }
    }

    return events;

});
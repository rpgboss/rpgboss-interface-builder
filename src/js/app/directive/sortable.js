define([], function() {

    function sortable() {
        var sortableConfig = {

        };

        return {
            restrict: 'A',
            scope: {
                onSortStop: '=onSortStop'
            },
            link: function postLink(scope, elem) {
                elem.sortable(sortableConfig);
                elem.disableSelection();

                elem.on('sortstop', function (evt, ui) {
                    if (scope.onSortStop) scope.onSortStop(evt, ui);
                });
                
            }
        };
    }

    return sortable;

});
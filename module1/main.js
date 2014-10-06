define(['angularAMD'], function() {
    "use strict";
    return [ '$scope', '$state', '$futureState', function($scope, $state, $futureState) {
        console.log("In define phase for module1")
        $scope.msg="Hello!";
        $futureState.state({
            name: 'module1.sub',
            url: '/sub',
            templateUrl: "/module1/sub.html",
            controller: function($scope) {
                console.log("in sub controller!");
            }
        })
    }]
});
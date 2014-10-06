define(['angularAMD'], function() {
    "use strict";
    return [ '$scope', '$futureState', function($scope, $futureState) {
        console.log("In define phase for module1");
        $scope.msg="Hello from Module 1";

        $futureState.state({
            name: 'module1.sub',
            url: '/sub',
            templateUrl: "/module1/sub.html",
            controller: function($scope) {
                $scope.msg="Hello from module 1 sub-state!";
            }
        })
    }]
});
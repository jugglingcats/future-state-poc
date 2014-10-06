define(['angularAMD'], function() {
    "use strict";
    return [ '$scope', '$futureState', function($scope, $futureState) {
        console.log("In define phase for module1");
        $scope.msg="Hello from Module 1";

        $futureState.futureState({
            stateName: 'module1.sub',
            url: '/sub',
            templateUrl: "/module1/sub.html",
            type: 'requirejs',
            src: 'sub.js'
        })
    }]
});
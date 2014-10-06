define(['angularAMD'], function() {
    "use strict";
    return [ '$scope', function($scope) {
        console.log("In define phase for sub of module1");
        $scope.msg="Hello from module1/sub!";
    }]
});
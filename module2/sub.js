define(['angularAMD'], function() {
    "use strict";
    return [ '$scope', function($scope) {
        console.log("In define phase for sub of module2");
        $scope.msg="Hello from module2/sub!";
    }];
});
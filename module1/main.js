define(['angularAMD'], function(angularAMD) {
    "use strict";
  var app = angular.module("module1", []);
  app.config(function($stateProvider) {
    console.log("In define phase for module1");

    $stateProvider.state({
      name: 'module1',
      url: '/module1',
      templateUrl: "/module1/main.html",
      controller: function($scope) { $scope.msg = "HELLO YES THIS IS DOG"}
    });

    $stateProvider.state({
      name: 'module1.sub',
      url: '/sub',
      templateUrl: "/module1/sub.html",
      controller: function($scope) {
        $scope.msg="Hello from module 1 sub-state!";
      }
    })
  });

  angularAMD.processQueue();
  return app;
});
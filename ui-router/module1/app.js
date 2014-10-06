define(['angularAMD'], function() {
    var app = angular.module("module1", ['ui.router']);

    console.log("Module 1 loading");

    app.controller("module1Ctrl", function($scope) {
        $scope.msg="Hello from module1";
    });

    app.config(['$stateProvider', function ($stateProvider) {
        console.log("Configuring module1");

        $stateProvider.state("module1", {
            url: "/module1",
            templateUrl: "module1/module1.html",
            controller: "module1Ctrl"
        })
    }]);

    return app;
});
"use strict";
define(['angularAMD', 'angular-ui-router', 'ui-router-extras', 'angular-sanitize', 'ui-router/module1/app'], function (angularAMD) {
    var app = angular.module("mainModule", ['ui.router', 'ngSanitize', 'module1']);

    var apps=[];

    app.controller('mainCtrl', function ($scope, $http) {
        $scope.msg = "Loaded!";

        $scope.apps = apps;

        $scope.$on("$routeChangeSuccess", function () {
            $scope.current = $location.path().split('/')[1];
        });
    });

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("admin", {
                url: "/",
                templateUrl: "default.html"
            });

        $http.get('app-defs.json').then(function (d) {
            angular.forEach(d.data, function (app) {
                console.log("Loading application: " + app.name);
                apps.push(app);
//                require([app.name + "/app.js"], function(ctrl) {
//                    console.log(app.name+" was loaded");
//                });
            });
        });
    });

    angularAMD.bootstrap(app);

    return app;
});
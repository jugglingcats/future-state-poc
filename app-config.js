"use strict";
define(['angularAMD', 'angular-ui-router', 'ui-router-extras', 'angular-sanitize'],
    function (angularAMD) {
        var app = angular.module("mainModule", ['ct.ui.router.extras', 'ngSanitize']);

        app.controller('mainCtrl', function ($scope, $http) {
            $scope.msg = "Loaded!";
            $http.get('apps').success(function (d) {
                $scope.apps = d;
            });

            $scope.$on("$routeChangeSuccess", function() {
                $scope.current=$location.path().split('/')[1];
            });
        });

        app.config(function($stateProvider, $futureStateProvider, $controllerProvider, $urlRouterProvider) {
            // TODO: find workaround
//            $urlRouterProvider.otherwise("/admin");

            $stateProvider
                .state("admin", {
                    url: "/",
                    templateUrl: "view/main/default.html"
                });

            $futureStateProvider.stateFactory('requirejs', function($q, futureState) {
                var d = $q.defer(); // make a deferred

                // tell requirejs to load controller
                require([futureState.src], function (controller) {
                    console.log("Resolving state: "+futureState.stateName);
                    console.log(futureState);
                    // define the full state using the loaded controller and config
                    d.resolve({
                        controller: controller,
                        name: futureState.stateName,
                        url: futureState.urlPrefix,
                        templateUrl: futureState.templateUrl
                    });
                });

                return d.promise;
            });

            $futureStateProvider.addResolve(function($http) {
                return $http.get('app-defs.json').then(function(resp) {
                    angular.forEach(resp.data, function(fstate) {
                        console.log("Registering future state: "+fstate.application);
                        fstate.stateName=fstate.application;
                        fstate.urlPrefix="/"+fstate.application;
                        fstate.templateUrl=fstate.application+"/main.html";
                        fstate.src=fstate.application+"/main.js";
                        fstate.type="requirejs";
                        $futureStateProvider.futureState(fstate);
                    });
                });
            });
        });

        angularAMD.bootstrap(app);

        return app;
    });
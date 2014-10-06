define(['angularAMD'], function() {
    var app = angular.module("module2", ['ui.router', 'ngSanitize']);

    app.config(function($stateProvider) {
        // never gets called
        console.log("init of module 2 sub")
        $stateProvider
            .state("module2.sub", {
                url: "/module2/sub",
                templateUrl: "/module2/sub.html"
            });
    });
});
define(['angularAMD'], function(angularAMD) {
  "use strict";
  angularAMD.config(function($stateProvider) {
    $stateProvider.state("module2", {
        url: "/module2",
        template: "<a ui-sref='.sub'>gotosubstate</a> <ui-view/>"
    });
    $stateProvider.state("module2.sub", {
        url: "/sub",
        templateUrl: "/module2/sub.html"
    });
  });
});

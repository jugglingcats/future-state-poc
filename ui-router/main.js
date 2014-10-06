require.config({
    baseUrl: "/",
    // alias libraries paths
    paths: {
        'app-config': 'ui-router/app-config',
        'angular': 'bower_components/angular/angular',
        'angular-route': 'bower_components/angular-route/angular-route',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router',
        'ui-router-extras': 'bower_components/ui-router-extras/release/ct-ui-router-extras',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize',
        'angularAMD': 'bower_components/angularAMD/angularAMD',
        'ngload': 'bower_components/angularAMD/ngload'
    },
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-ui-router': ['angular'],
        'ui-router-extras': ['angular'],
        'angular-sanitize': ['angular']
//        'blockUI': ['angular']
//        'ui-bootstrap': ['angular']

    },
    // kick start application
    deps: ['app-config']
});
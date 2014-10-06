module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            connect: {
                server: {
                    options: {
                        port: 9000,
                        hostname: '',
                        base: '.',
                        logger: 'dev',
                        middleware: function (connect, options) {
                            var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
                            return [
                                // Include the proxy first
                                proxy,
                                // Serve static files.
                                connect.static(options.base),
                                // Make empty directories browsable.
                                connect.directory(options.base)
                            ];
                        }
                    }
                },
                proxies: [
//                    {
//                        context: '/evolok-admin-web',
//                        host: '127.0.0.1',
//                        port: 9093,
//                        https: false,
//                        changeOrigin: false
//                    },
//                    {
//                        context: '/evolok-ad-web',
//                        host: '127.0.0.1',
//                        port: 8899,
//                        https: false,
//                        changeOrigin: false
//                    },
//                    {
//                        context: '/evolok-pm-web',
//                        host: '127.0.0.1',
//                        port: 8090,
//                        https: false,
//                        changeOrigin: false
//                    }
                ],
                livereload: {
                    options: {
                        middleware: function (connect, options) {
                            return [
                                proxySnippet
//                                , mountFolder(connect, '/tmp')
                            ];
                        }
                    }
                }
            },
            watch: {

            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-connect-proxy');

    grunt.registerTask('server', function (target) {
        grunt.task.run([
//            'clean:server',
            'connect:server',
            'configureProxies',
//            'connect:livereload',
            'watch'
        ]);
    });

// Default task(s).
//    grunt.registerTask('default', ['ngtemplates', 'concat', 'uglify']);
}
;
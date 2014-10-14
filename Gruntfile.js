module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            default: {
                options: {
                    preserveComments: 'some',
                    sourceMap: 'angular-clickout.min.map',
                    sourceMappingURL: 'angular-clickout.min.map'
                },
                files: {
                    'angular-clickout.min.js': 'angular-clickout.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};
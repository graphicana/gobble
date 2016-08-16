module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'js/script.js': ['components/js/script.js']
                }
            }
        }, //uglify
        watch: {
            options: {livereload: true},
            scripts: {
                files: ['components/js/script.js'],
                tasks: ['uglify']
            },
            html: {
                files: ['*.html']
            }
        }
    }) //initConfig
    grunt.registerTask('default', 'watch');
} //exports
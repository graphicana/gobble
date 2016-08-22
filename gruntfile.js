module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'js/script.js': ['components/js/script.js']
                }
            }
        }, //uglify
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
            options: {livereload: true},
            scripts: {
                files: ['components/js/script.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['components/scss/*.scss'],
                tasks: ['compass:dev']
            },
            html: {
                files: ['*.html']
            }
        }
    }) //initConfig
    grunt.registerTask('default', 'watch');
} //exports
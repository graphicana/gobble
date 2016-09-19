module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    /*grunt.loadNpmTasks('grunt-contrib-compass');
     grunt.loadNpmTasks('grunt-contrib-sass');*/
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'js/script.js': ['components/js/script.js']
                }
            }
        }, //uglify
        /*compass: {
         dev: {
         options: {
         config: 'config.rb'
         }
         }
         },*/
        less: {
            development: {
                options: {
                    compress: false
                },
                files: {
                    "css/styles.css" : "css/less/bootstrap.less" // destination file and source file
                }
            }
        },
        watch: {
            options: {livereload: true},
            scripts: {
                files: ['components/js/script.js'],
                tasks: ['uglify']
            },
            /*compass: {
             files: ['components/sass/!*.scss'],
             tasks: ['compass:dev']
             },*/
            styles: {
                files: ['css/less/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: false
                }
            },
            html: {
                files: ['*.html']
            }
        }
    }) //initConfig
    grunt.registerTask('default', 'watch');
} //exports
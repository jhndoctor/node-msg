const sass = require('node-sass')

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'public/stylesheets/application.css' : 'sass/application.scss'
                }
            },
            options: {
                implementation: sass,
                sourceMap: true,
                includePaths: [
                    require('node-bourbon').includePaths,
                    './bower_components/color-scale',
                    './bower_components/type-rhythm-scale',
                    './bower_components/stipe'  
                ]
            }
        },
        watch: {
            source: {
                files: ['sass/**/*.scss', 'views/**/*.jade'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-sass')
    grunt.registerTask('default', ['sass'])
}
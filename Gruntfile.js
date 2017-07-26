module.exports = function(grunt) {

      //configuration
      grunt.initConfig({
            //pass in options to plugins, references to files etc
            sass: {
                  build: {
                        files: [{
                              src: 'src/css/sass/app.scss',
                              dest: 'src/css/app.css'
                        },{
                              src: 'src/css/sass/bootstrap.scss',
                              dest: 'src/css/bootstrap.css'
                        },{
                              src: 'src/css/sass/index.scss',
                              dest: 'src/css/index.css'
                        },{
                              src: 'src/css/sass/mysolar.scss',
                              dest: 'src/css/mysolar.css'
                        }]
                  },
            },
            concat: {
                  // js: {
                  //       src: ['src/js/*.js'],
                  //       dest: 'build/scripts.js'
                  // },
                  css: {
                        src: ['src/css/bootstrap.css', 'src/css/index.css', 'src/css/mysolar.css', 'src/css/app.css'],
                        dest: 'src/css/concat/styles.css'
                  }
            },
            uglify: {

            },
            cssmin: {
                  target: {
                        src: 'src/css/concat/styles.css',
                        dest: 'src/css/minify/styles.min.css'
                  }
            },
            imagemin: {
                  dynamic: {
                        src: 'src/images/*.jpg',
                        dest: 'src/images/solar4.min.jpg'
                  }
            },
            watch: {
                  sass: {
                        files: ['src/css/sass/*.scss'],
                        tasks: ['sass', 'concat:css', 'cssmin']
                  }
            }
      });

      //load plugins
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-contrib-imagemin');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-sass');

      //Register Tasks to run
      // grunt.registerTask('run', function() {
      //       console.log('i am running');
      // });
      //
      // grunt.registerTask('sleep', function() {
      //       console.log('i am sleeping');
      // });
      //
      // grunt.registerTask('all', ['sleep', 'run']);

      grunt.registerTask('trans', ['imagemin','concat:css','cssmin']);

      grunt.registerTask('img-trans', 'imagemin');

      grunt.registerTask('sass-trans', 'sass');

      grunt.registerTask('watch-code', 'watch');

};

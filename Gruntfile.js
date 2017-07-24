module.exports = function(grunt) {

      //configuration
      grunt.initConfig({
            //pass in options to plugins, references to files etc
            concat: {
                  js: {
                        src: ['src/js/*.js'],
                        dest: 'build/scripts.js'
                  },
                  css: {
                        src: ['src/css/*.css'],
                        dest: 'src/css/styles.css'
                  }
            }
      });

      //load plugins
      grunt.loadNpmTasks('grunt-contrib-concat');

      //Register Tasks to run
      grunt.registerTask('run', function() {
            console.log('i am running');
      });

      grunt.registerTask('sleep', function() {
            console.log('i am sleeping');
      });

      grunt.registerTask('all', ['sleep', 'run']);

};

/**
* 
* @param {IGrunt} grunt
*/
module.exports = function (grunt) {
  // Load the grunt tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // register tasks.
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        }
      },
      src: ['./test/**/*.js']
    },

    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['mochaTest']
      },
    },

  });
  // register default 
  grunt.registerTask('default', ['mochaTest', 'watch']);
}
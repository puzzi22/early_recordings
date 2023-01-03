module.exports = function (grunt) {

grunt.initConfig({
  critical: {
  dist: {
    options: {
      base: './src/',
      dimensions: [{
        width: 1300,
        height: 900
      },
      {
        width: 500,
        height: 900
      }],
      src: '*.html',
      dest:  './'
    }
  }
}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');

  // Default tasks.
  grunt.registerTask('default', ['critical']);
};